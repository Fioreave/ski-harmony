import React from "react";

export default function Privacidad() {
  const pdfUrl = "/politica-privacidad.pdf"; // coloca tu archivo PDF en la carpeta /public

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-xl font-semibold mb-4">
        Haz click aquí para ver nuestra política de privacidad
      </h1>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Ver Política de Privacidad
        </button>
      </a>
    </div>
  );
}
