import React, { useState } from 'react';
import ResultTable from './ResultTable'; // Impor komponen ResultTable
import { extractDataFromPDF } from './pdfUtils'; // Impor fungsi ekstraksi data dari pdfUtils

const App: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [extractedData, setExtractedData] = useState<any[]>([]); // Menyimpan hasil ekstraksi

  // Fungsi untuk menangani upload file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPdfFile(file);
    }
  };

  // Fungsi untuk mengekstrak data dari PDF
  const handleExtractData = async () => {
    if (pdfFile) {
      const data = await extractDataFromPDF(pdfFile);
      setExtractedData(data);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Data Extraction App</h1>
      
      {/* Input untuk upload file */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 p-2 border rounded"
      />
      
      {/* Tombol untuk mengekstrak data dari PDF */}
      <button
        onClick={handleExtractData}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Extract Data
      </button>

      {/* Tabel hasil ekstraksi */}
      {extractedData.length > 0 && <ResultTable data={extractedData} />}
    </div>
  );
};

export default App;
