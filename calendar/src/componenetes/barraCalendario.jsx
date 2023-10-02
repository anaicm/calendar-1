import React from "react";
import flecha from '../imagenes/flecha.png';//imagenes


export const BarraCalendario =({anio, mesSeleccionado, onChangeMes, onChangeAnio})=>{
    

    const handleMesClick = (mes) => {
        onChangeMes(mes);
      };
    // Paso 1: Estado para el año actual

    // Paso 2: Funciones para manejar el clic de las flechas
    const aumentarAnio = () => {
        onChangeAnio(anio + 1);
    };

    const disminuirAnio = () => {
        onChangeAnio(anio - 1);
    };
    return (
    <>
     <nav>
        <div className="text-box">
            <div style={{ marginTop: '10px' }}>
                {/* Paso 3: Vincula las funciones de manejo de clic a las imágenes */}
                <img src={flecha} className="img-flech-top"  onClick={aumentarAnio}/>
                <img src={flecha} className="img-flech-bottom" onClick={disminuirAnio}/> 
            </div>
            {/* Paso 4: Actualiza el año en el elemento <p> */}
          <p className="btn" style={{ color: '#F0F2F3', fontWeight: 'bold'  }}>{anio}</p>
            <p className={`btn ${mesSeleccionado === 1 ? 'selected' : ''}`} onClick={() => handleMesClick(1)}>Jan</p>
            <p className={`btn ${mesSeleccionado === 2 ? 'selected' : ''}`} onClick={() => handleMesClick(2)}>Feb</p>
            <p className={`btn ${mesSeleccionado === 3 ? 'selected' : ''}`} onClick={() => handleMesClick(3)}>Mar</p>
            <p className={`btn ${mesSeleccionado === 4 ? 'selected' : ''}`} onClick={() => handleMesClick(4)}>Apr</p>
            <p className={`btn ${mesSeleccionado === 5 ? 'selected' : ''}`} onClick={() => handleMesClick(5)}>May</p>
            <p className={`btn ${mesSeleccionado === 6 ? 'selected' : ''}`} onClick={() => handleMesClick(6)}>Jun</p>
            <p className={`btn ${mesSeleccionado === 7 ? 'selected' : ''}`} onClick={() => handleMesClick(7)}>Jul</p>
            <p className={`btn ${mesSeleccionado === 8 ? 'selected' : ''}`} onClick={() => handleMesClick(8)}>Aug</p>
            <p className={`btn ${mesSeleccionado === 9 ? 'selected' : ''}`} onClick={() => handleMesClick(9)}>Sep</p>
            <p className={`btn ${mesSeleccionado === 10 ? 'selected' : ''}`} onClick={() => handleMesClick(10)}>Oct</p>
            <p className={`btn ${mesSeleccionado === 11 ? 'selected' : ''}`} onClick={() => handleMesClick(11)}>Nov</p>
            <p className={`btn ${mesSeleccionado === 12 ? 'selected' : ''}`} onClick={() => handleMesClick(12)}>Dec</p>
        </div>
    </nav>

</>
)
}