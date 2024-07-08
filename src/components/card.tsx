/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import DetalleImagen from './DetalleImagen'; // Importa la página de detalle creada

interface ImageCardProps {
  id: string,
  title: string;
  img: string;
  description: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ id, title, img, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  // const toggleDetails = () => {
  //   setShowDetails(!showDetails);
  // };

  if (showDetails) {
    return <DetalleImagen title={title} description={description} />;
  }

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <img className='h-48 w-full object-cover' src={img} alt={title} />
      <div className='p-4 flex flex-col gap-2'>
        <h3 className='text-lg font-semibold text-green-600'>{title}</h3>
        <p className='text-gray-600'>
          {showDetails ? description : (description.length > 0 ? `${description.slice(0, 50)}...` : 'No hay descripción')}
        </p>
          <Link
            href={`home/${id}`}
            className='py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4'
          >
            {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
          </Link>
      </div>
    </div>
  );
};
