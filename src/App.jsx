import React, { useState, useEffect } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

function App() {
  // definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrapregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [ gasto, setGasto] = useState({});
  const [ creargasto, setCrearGasto] = useState(false);

  //useFfect que actualizar el restante
  useEffect( () => {
    if (creargasto) {
      //agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ])
      //resta del presupueto actual
      const presurestante = restante - gasto.cantidad;
      setRestante(presurestante); 

      //resetear
      setCrearGasto(false);
    }
  }, [gasto, creargasto,gastos, restante])


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrapregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                setGasto={setGasto}
                setCrearGasto={setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
