import * as pdfjsLib from 'pdfjs-dist';

// Tentukan lokasi worker PDF.js (versi terbaru)
(pdfjsLib as any).GlobalWorkerOptions.workerSrc = 
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// Fungsi untuk mengekstrak teks dari PDF
export async function extractTextFromPDF(file: File): Promise<string> {
  const pdfData = new Uint8Array(await file.arrayBuffer());
  const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
  let fullText = '';

  // Ekstraksi teks dari setiap halaman PDF
  for (let i = 0; i < pdf.numPages; i++) {
    const page = await pdf.getPage(i + 1);
    const content = await page.getTextContent();
    const strings = content.items.map((item: any) => item.str);
    fullText += strings.join(' ') + '\n'; // Gabungkan semua teks halaman
  }

  return fullText;
}

// Fungsi untuk mengekstrak data spesifik dari teks
export function extractData(text: string): Record<string, string> {
  const data: Record<string, string> = {
    'Name': '',
    'Place of Birth': '',
    'Date of Birth': '',
    'Passport No': '',
    'Passport Expiry': ''
  };

  // Fungsi untuk membersihkan dan memformat teks
  const cleanText = (t: string) => {
    return t.replace(/[^A-Za-z\s]/g, '').trim().split(/\s+/).slice(0, 2).join(' ');
  };

  // Pisahkan teks per baris
  const lines = text.split('\n');
  for (let line of lines) {
    if (/Name|Nama/i.test(line)) {
      const parts = line.split(':');
      if (parts.length > 1) data['Name'] = cleanText(parts[1]);
    } else if (/Place of Birth|Tempat Lahir/i.test(line)) {
      const parts = line.split(':');
      if (parts.length > 1) data['Place of Birth'] = cleanText(parts[1]);
    } else if (/Date of Birth|Tanggal Lahir/i.test(line)) {
      const match = line.match(/(\d{2})[-/](\d{2})[-/](\d{4})/);
      if (match) data['Date of Birth'] = `${match[1]}/${match[2]}/${match[3]}`;
    } else if (/Passport No/i.test(line)) {
      const match = line.match(/\b([A-Z0-9]+)\b/);
      if (match) data['Passport No'] = match[1];
    } else if (/Passport Expiry/i.test(line)) {
      const match = line.match(/(\d{2})[-/](\d{2})[-/](\d{4})/);
      if (match) data['Passport Expiry'] = `${match[1]}/${match[2]}/${match[3]}`;
    }
  }

  return data;
}
