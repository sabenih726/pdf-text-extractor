import React, { useState } from 'react';
import PdfUploader from '../components/PdfUploader';
import ResultTable from '../components/ResultTable';
import { extractTextFromPDF, extractData } from '../utils/pdfUtils';

const Home: React.FC = () => {
  const [extractedData, setExtractedData] = useState<any[]>([]);

  const handleExtractData = async (pdfFile: File) => {
    const text = await extractTextFromPDF(pdfFile);
    const data = extractData(text);
    setExtractedData([data]); // Menyimpan hasil ekstraksi data
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Data Extraction App</h1>

      {/* Komponen PdfUploader untuk upload file */}
      <PdfUploader onExtractData={handleExtractData} />

      {/* Tabel hasil ekstraksi */}
      {extractedData.length > 0 && <ResultTable data={extractedData} />}
    </div>
  );
};

export default Home;
