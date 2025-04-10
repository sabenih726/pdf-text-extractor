import React, { useState } from 'react';
import { extractTextFromPDF } from '../utils/pdfUtils';

const PdfUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleExtractText = async () => {
    if (file) {
      const text = await extractTextFromPDF(file);
      setExtractedText(text);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload and Extract Text from PDF</h1>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 p-2 border rounded"
      />
      <button
        onClick={handleExtractText}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Extract Text
      </button>
      <div className="mt-6">
        {extractedText && (
          <div>
            <h2 className="font-semibold">Extracted Text:</h2>
            <pre className="mt-2 bg-gray-100 p-4 rounded">{extractedText}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfUploader;
