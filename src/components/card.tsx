'use client'
import React, { useState } from 'react';

interface ImageCardProps {
  title: string;
  img: string;
  description: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ title, img, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <img className='h-48 w-full object-cover' src={img} alt={title} />
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-green-600'>{title}</h3>
        <p className='text-gray-600'>
          {showDetails ? description : (description.length > 0 ? `${description.slice(0, 50)}...` : 'No hay descripción')}
        </p>
        <button
          className='mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2'
          onClick={toggleDetails}
        >
          {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
      </div>
    </div>
  );
};
