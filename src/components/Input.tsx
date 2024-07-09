// src/components/Input.tsx

import React from 'react';

// Definición de InputProps que incluye pattern
export interface InputProps {
    type: string;
    name: string;
    id: string;
    label: string;
    required: boolean;
    className?: string;
    pattern?: string; // Agregar pattern como una propiedad opcional
    // Otros props que puedas necesitar
}

// Componente funcional Input que utiliza InputProps
const Input: React.FC<InputProps> = ({
    type,
    name,
    id,
    label,
    required,
    className,
    pattern, // Asegurarse de incluir pattern en las props destructuradas
    // Otros props que necesites usar
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                required={required}
                className={`mt-1 block w-full px-3 py-2 border ${className} rounded-lg shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm`}
                pattern={pattern} // Asegurarse de pasar pattern al input si está definido
            />
        </div>
    );
};

export default Input;
