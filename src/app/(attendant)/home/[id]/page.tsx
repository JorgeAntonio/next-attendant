/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { images } from "@/libs/data";


export default function EventoDetalle ({ params }: { params: { id: string } }) {
    const event = images.find(image => image.id === parseInt(params.id));

    return (

        <>
            {
                event ? (
                    <div className="container mx-auto mt-8">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-3xl font-bold">{event?.title}</h1>
                        </div>
                        <div className='flex justify-between gap-6'>
                            <Image src={event?.image} alt={event?.title} width={800} height={600} className="rounded" />
                            <div>
                                <span className="font-semibold">{event?.location}</span>
                                <div className='flex flex-col gap-4'>
                                    <p className="text-gray-600">{event?.description}</p>
                                    <p className="text-gray-600"><strong>Date:</strong> {event?.date}</p>
                                    <p className="text-gray-600"><strong>Time:</strong> {event?.time}</p>
                                    <div className='flex gap-3'>
                                        <Link href="/events">
                                            <button className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2">
                                                Register
                                            </button>
                                        </Link>

                                        <Link href="/">
                                            <button className="text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg px-4 py-2">
                                                Back to Home
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                ) : (
                    <div className="container mx-auto mt-8">
                        <h1 className="text-3xl font-bold">Evento no encontrado</h1>
                        <Link href="/">
                            <button className="mt-4 text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg px-4 py-2">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                )
            }
        </>
    );
}

