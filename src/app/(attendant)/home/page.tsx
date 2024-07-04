import React from 'react';
import { ImageCard } from '@/components/card';

const images = [
    {
        title: "CREMA",
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        description: "Descripción de CREMA"
    },
    {
        title: "titulo",
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        description: "Descripción de titulo"
    },
    {
        title: "MEDICINA",
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        description: "Descripción de MEDICINA"
    },
    {
        title: "titulo",
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        description: "Descripción de titulo"
    }
];

export default function HomePage() {
    return (
        <div className='container mx-auto p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {images.map((image, index) => (
                    <ImageCard key={index} img={image.img} title={image.title} description={image.description} />
                ))}
            </div>
        </div>
    );
}
