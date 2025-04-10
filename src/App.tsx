import React from 'react';
import PdfUploader from './components/PdfUploader';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <PdfUploader />
    </div>
  );
};

export default App;
