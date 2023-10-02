
import './App.css';
import { BarraCalendario } from './componenetes/barraCalendario';
import { CabeceraPrincipal } from './componenetes/cabecera';
import { TableDay } from './componenetes/tablaDias';
import { useState } from "react";

function App() {

  const [mesSeleccionado, setMesSeleccionado] = useState(1);
    const [anio, setAnio] = useState(2023);

    const onChangeMes = (mes) => {
      debugger;
      setMesSeleccionado(mes);
  };

  const onChangeAnio = (anio) => {
    debugger;
    setAnio(anio);
};

  return (
    <>
      <div className='header'>
        <CabeceraPrincipal/>
      </div>
      <div className='nav-calendario'>
        <BarraCalendario mesSeleccionado={mesSeleccionado} anio={anio} onChangeMes={onChangeMes} onChangeAnio={onChangeAnio} />
      </div>
      <div className='body-calendar'>
        <TableDay mesSeleccionado={mesSeleccionado} anio={anio} />{/**De esta forma se pasa el valor que se obtiene en la selección */}
      </div>
        
      
    </>
  );
}

export default App;
