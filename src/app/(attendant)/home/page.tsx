import React from 'react';
import { ImageCard } from '@/components/card';
import { images } from '@/libs/data';



export default function HomePage() {
    return (
        <div className='container mx-auto p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {images.map((image, index) => (
                    <ImageCard key={index} id={image.id.toString()} img={image.img} title={image.title} description={image.description} />
                ))}
            </div>
        </div>
    );
}
