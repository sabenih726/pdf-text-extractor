import React, { useState } from 'react';
import { extractTextFromPDF } from './utils/pdfUtils';

const App: React.FC = () => {
  const [pdfText, setPdfText] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const text = await extractTextFromPDF(file);
      setPdfText(text);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Ekstraksi Teks dari PDF</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} className="mb-4" />
      <textarea
        value={pdfText}
        readOnly
        rows={15}
        className="w-full p-2 border rounded"
        placeholder="Teks hasil ekstraksi akan muncul di sini..."
      />
    </div>
  );
};

export default App;
