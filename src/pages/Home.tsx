import React from 'react';
import PdfUploader from '../components/PdfUploader';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <PdfUploader />
    </div>
  );
};

export default Home;
