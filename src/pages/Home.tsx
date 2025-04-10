import React, { useState } from 'react';
import PdfUploader from '../components/PdfUploader';
import ResultTable from '../components/ResultTable';
import { extractDataFromPDF } from '../utils/pdfUtils';

const Home: React.FC = () => {
  const [extractedData, setExtractedData] = useState<any[]>([]);

  const handleExtractData = async (pdfFile: File) => {
    const data = await extractDataFromPDF(pdfFile);
    setExtractedData(data);
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
