import React, { useState } from 'react';
import { extractTextFromPDF } from '../utils/pdfUtils';

const PdfUploader: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const extractedText = await extractTextFromPDF(file);
      setText(extractedText);
    }
  };

  return (
    <div className="p-4">
      <input type="file" accept="application/pdf" onChange={handleFileChange} className="mb-4" />
      <textarea className="w-full h-96 p-2 border rounded" value={text} readOnly />
    </div>
  );
};

export default PdfUploader;