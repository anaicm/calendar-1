import React from "react";
import calendario from '../imagenes/calendario.png';//imagenes
import expandir from '../imagenes/expandir.png'
import aspax from '../imagenes/aspas.png'
import '../App.css';
//import Styles from '../estilosCSS/cabecera.module.css';//className={Styles.mainHeader}

export const CabeceraPrincipal =()=>{

    return (
    <>
        <header>
            <div className="container capa1">
                <div className="capa2">
                    <img src={calendario} className="img-tam-calendario"/>
                </div>
                <div className="capa3">
                   <span style={{ fontStyle: 'italic', fontWeight: 'bold'  }}> Calendario de tickets</span>
                </div>
                <div className="capa4">
                    <img src={expandir} className="img-tam-expandir"/>
                    <img src={aspax} className="img-tam-aspa"/>
                </div>
            </div>
        </header>
</>
)
}