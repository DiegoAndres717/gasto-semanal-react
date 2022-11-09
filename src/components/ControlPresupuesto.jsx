import React from 'react';
import { revisarPresu } from '../helpers'

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresu(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </>
    );
};

export default ControlPresupuesto;