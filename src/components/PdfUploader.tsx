import React from 'react';

interface PdfUploaderProps {
  onExtractData: (pdfFile: File) => void;
}

const PdfUploader: React.FC<PdfUploaderProps> = ({ onExtractData }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onExtractData(file);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default PdfUploader;
