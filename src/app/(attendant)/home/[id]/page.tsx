'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from "@/libs/data"; // Asegúrate de que la ruta de importación sea correcta

interface ImageData {
    id: number;
    title: string;
    img: string;
    description: string;
    date?: string;
    location?: string;
    gallery?: string[];
    price?: number;
    discount?: number;
    expirationDate?: string;
}

export default function EventoDetalle({ params }: { params: { id: string } }) {
    const [isRegistered, setIsRegistered] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
    });

    const image: ImageData | undefined = images.find((item) => item.id.toString() === params.id);

    if (!image) {
        return <div>No se encontró el evento</div>;
    }

    const { title, description, img, date, location, gallery, price, discount, expirationDate } = image;

    const handleRegistration = () => {
        setIsRegistered(true);
        setShowForm(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await submitForm();
            resetForm();
            setShowForm(false);
            alert('Producto registrado exitosamente.');
        } catch (error) {
            console.error('Error al registrar producto:', error);
            alert('Ocurrió un error al registrar el producto. Por favor intenta de nuevo.');
        }
    };

    const validateForm = () => {
        if (!formData.name) {
            alert('Por favor completa todos los campos.');
            return false;
        }
        return true;
    };

    const submitForm = async () => {
        console.log('Datos del formulario:', formData);
        // Lógica para registrar el producto, aún no implementada
    };

    const resetForm = () => {
        setFormData({
            name: '',
        });
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="flex items-center cursor-pointer" onClick={handleRegistration}>
                    <p className="ml-2 text-gray-600">
                        {price && <span className="font-semibold">{price} USD</span>}
                        {discount && <span className="text-red-600 ml-2">Descuento: {discount}%</span>}
                        {expirationDate && <span className="text-gray-500 ml-2">Válido hasta: {expirationDate}</span>}
                    </p>
                </div>
            </div>
            <Image src={img} alt={title} width={800} height={600} className="mb-4 w-full h-auto rounded" />
            <p className="text-gray-600 mb-4">{description}</p>
            {date && <p className="text-gray-600 mb-2"><strong>Fecha:</strong> {date}</p>}
            {location && <p className="text-gray-600 mb-2"><strong>Ubicación:</strong> {location}</p>}

            {isRegistered && (
                <p className="text-green-600 font-bold mb-4">¡Registrado!</p>
            )}

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Galería de Imágenes</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {gallery && gallery.map((src, index) => (
                        <Image key={index} src={src} alt={`Gallery image ${index + 1}`} width={400} height={300} className="w-full h-auto rounded" />
                    ))}
                </div>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="mt-8">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </form>
            )}

            <Link href="/events">
                <button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2">
                    Registrarse
                </button>
            </Link>

            <Link href="/">
                <button className="mt-4 text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg px-4 py-2">
                    Volver a la página principal
                </button>
            </Link>
        </div>
    );
}

