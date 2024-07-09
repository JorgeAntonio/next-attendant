
import React from 'react';
import Input from '../../../components/Input'; // Importa el componente Input desde la ubicación correcta
import Image from 'next/image'; // Importa el componente Image desde next/image

export default function EventsPage() {
    return (
        <div className="bg-green-100 min-h-screen flex items-center justify-center bg-cover"
            style={{
                backgroundImage: "url('/fondo(1).jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Contenedor principal */}
            <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
                {/* Sección del logo */}
                <div className="flex justify-center mb-6">
                    <Image src="/logo.svg" alt="Logo" width={64} height={64} />
                </div>
                {/* Formulario de registro */}
                <form>
                    {/* Input para dirección de email */}
                    <Input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        label="Email address"
                        required
                        className="mb-4"
                    />
                    {/* Input para contraseña */}
                    <Input
                        type="password"
                        name="floating_password"
                        id="floating_password"
                        label="Password"
                        required
                        className="mb-4"
                    />
                    {/* Input para confirmación de contraseña */}
                    <Input
                        type="password"
                        name="repeat_password"
                        id="floating_repeat_password"
                        label="Confirm password"
                        required
                        className="mb-4"
                    />
                    {/* Grid para nombres y apellidos */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Input para nombre */}
                        <Input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            label="First name"
                            required
                            className="mb-4"
                        />
                        {/* Input para apellido */}
                        <Input
                            type="text"
                            name="floating_last_name"
                            id="floating_last_name"
                            label="Last name"
                            required
                            className="mb-4"
                        />
                    </div>
                    {/* Grid para número de teléfono y compañía */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Input para número de teléfono */}
                        <Input
                            type="tel"
                            name="floating_phone"
                            id="floating_phone"
                            label="Phone number (123-456-7890)"
                            required
                            className="mb-4"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Ejemplo de pattern para validar el teléfono
                        />
                        {/* Input para compañía */}
                    </div>
                    {/* Botón de registro */}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-white py-2.5 px-5 mt-4 w-full"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
