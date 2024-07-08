'use client'
import React from 'react';
import Link from 'next/link';

interface DetalleImagenProps {
  title: string;
  description: string;
}

const DetalleImagen: React.FC<DetalleImagenProps> = ({ title, description }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-8">{description}</p>
        <Link href="/" className="text-blue-600 hover:underline">Regresar a la página principal</Link>
    </div>
  );
};

export default DetalleImagen;

