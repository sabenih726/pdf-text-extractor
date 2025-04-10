import * as pdfjsLib from 'pdfjs-dist';

// Tentukan lokasi worker PDF.js
(pdfjsLib as any).GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// Fungsi untuk mengekstrak teks dari PDF
export async function extractTextFromPDF(file: File): Promise<string> {
  const pdfData = new Uint8Array(await file.arrayBuffer());
  const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
  let fullText = '';

  for (let i = 0; i < pdf.numPages; i++) {
    const page = await pdf.getPage(i + 1);
    const content = await page.getTextContent();
    const strings = content.items.map((item: any) => item.str);
    fullText += strings.join(' ') + '\n';
  }

  return fullText;
}
