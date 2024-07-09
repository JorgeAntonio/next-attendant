
import React from 'react';
import Input from '../../../components/Input'; // Importa el componente Input desde la ubicación correcta
import Image from 'next/image'; // Importa el componente Image desde next/image

export default function EventsPage() {
    return (
        <form className="max-w-xl py-6">
            <Input
                type="text"
                name="floating_email"
                id="floating_email"
                label="Event title"
                required
            />
            <Input
                type="text"
                name="floating_description"
                id="floating_description"
                label="Event description"
                required
            />
            <Input
                type="text"
                name="floating_location"
                id="floating_location"
                label="Event location"
                required
            />
            <div className="grid md:grid-cols-2 md:gap-6">
                <Input
                    type="text"
                    name="date"
                    id="date"
                    label="Event date"
                    required
                />
                <Input
                    type="text"
                    name="time"
                    id="time"
                    label="Event time"
                    required
                />
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register
            </button>
        </form>
    );
}
