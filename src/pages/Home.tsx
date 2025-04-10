import React from 'react';
import PdfUploader from '../components/PdfUploader';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Ekstraksi Teks dari PDF</h1>
      <PdfUploader />
    </div>
  );
};

export default Home;