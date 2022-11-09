import React, { useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante, actualizarPregunta }) => {
    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10 ))
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
        //validar
        if (cantidad < 1 || isNaN( cantidad )) {
            guardarError(true);
            return;
        }
        //si se para la validacion
        guardarError(false); 
        setPresupuesto(cantidad);
        setRestante(cantidad);
        actualizarPregunta(false);
    }

    return (
        <>
            <h2>coloca tu presupuesto</h2>
            { error ? <Error mensaje='El Presupuesto es Incorrecto'/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                type="number"
                className='u-full-width'
                placeholder='Coloca tu presupuesto' 
                onChange={definirPresupuesto}
                />

                <input 
                type="submit"
                className='button-primary u-full-width'
                value='Definir Presupuesto'
                />
            </form>
        </>
    );
};

export default Pregunta;