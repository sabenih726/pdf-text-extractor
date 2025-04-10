import React, { useState } from 'react';
import { extractTextFromPDF, extractData } from '../utils/pdfUtils';
import ResultTable from './ResultTable';

const PdfUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<Record<string, string>>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null;
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const extractedText = await extractTextFromPDF(file);
        setText(extractedText);

        const extractedData = extractData(extractedText);
        setData(extractedData);
      } catch (error) {
        console.error('Error extracting text from PDF:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Extract</button>
      {text && <p>Extracted Text: {text}</p>}
      {Object.keys(data).length > 0 && <ResultTable data={data} />}
    </div>
  );
};

export default PdfUploader;
