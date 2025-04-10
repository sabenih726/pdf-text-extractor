import React from 'react';

interface ResultTableProps {
  data: any[];
}

const ResultTable: React.FC<ResultTableProps> = ({ data }) => {
  return (
    <div className="mt-4">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Nama</th>
            <th className="border px-4 py-2 text-left">Tempat Lahir</th>
            <th className="border px-4 py-2 text-left">Tanggal Lahir</th>
            <th className="border px-4 py-2 text-left">Nomor Paspor</th>
            <th className="border px-4 py-2 text-left">Masa Berlaku</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-white">
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.birthPlace}</td>
              <td className="border px-4 py-2">{row.birthDate}</td>
              <td className="border px-4 py-2">{row.passportNumber}</td>
              <td className="border px-4 py-2">{row.passportExpiry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
