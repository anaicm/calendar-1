import React, { useState } from "react";
import { Legend } from "./checkbox";

export const TableDay = ({ mesSeleccionado, anio }) => {
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  function obtenerDiasEnMes(mes, anio) {
    const ultimoDiaDelMes = new Date(anio, mes, 0);
    return ultimoDiaDelMes.getDate();
  }

  const diasEnMesElegido = obtenerDiasEnMes(mesSeleccionado, anio);

  const primerDiaDelMes = new Date(anio, mesSeleccionado - 1, 1).getDay();

  const celdasVacias = Array.from(
    { length: primerDiaDelMes === 0 ? 6 : primerDiaDelMes - 1 },
    (_, i) => <td key={`empty-${i}`}></td>
  );

  const daysOfMonth = Array.from({ length: diasEnMesElegido }, (_, i) => i + 1);

  const pruebaData = [
    {
      tipo: 1,
      fechaInicio: new Date(2023, 0, 1),
      fechaFin: new Date(2023, 0, 5),
      texto: "Evento 1",
      id: 1
    },
    {
      tipo: 2,
      fechaInicio: new Date(2023, 0, 3),
      fechaFin: new Date(2023, 0, 10),
      texto: "Evento 2",
      id: 2
    },
    {
      tipo: 3,
      fechaInicio: new Date(2023, 0, 11),
      fechaFin: new Date(2023, 0, 15),
      texto: "Evento 3",
      id: 3
    },
    {
      tipo: 4,
      fechaInicio: new Date(2023, 0, 16),
      fechaFin: new Date(2023, 0, 20),
      texto: "Evento 4",
      id: 4
    },
    {
      tipo: 1,
      fechaInicio: new Date(2023, 0, 21),
      fechaFin: new Date(2023, 0, 25),
      texto: "Evento 5",
      id: 5
    },
    {
        tipo: 1,
        fechaInicio: new Date(2023, 0, 1),
        fechaFin: new Date(2023, 0, 30),
        texto: "Evento 6",
        id: 6
      },
      {
        tipo: 2,
        fechaInicio: new Date(2023, 0, 1),
        fechaFin: new Date(2023, 0, 30),
        texto: "Evento 7",
        id: 6
      },
  ];
  
  const generateEvents = () => {
    debugger;
    const rows = [];
    let currentRow = [...celdasVacias];
  
    daysOfMonth.forEach((dayNumber, columnIndex) => {
      const currentDay = new Date(anio, mesSeleccionado-1, dayNumber);
      const matchingData = pruebaData.filter(
        (data) =>
          currentDay >= data.fechaInicio && currentDay <= data.fechaFin
      );

      let cellContent = null;
      if (matchingData.length > 0) {
        const eventItems = matchingData.map((data, index) => (
          <div
            onClick={() => { alert(data.id) }}
            key={index}
            className={`cell-event box-input box-input-${
              data.tipo === 1
                ? "rojo"
                : data.tipo === 2
                ? "amarillo"
                : data.tipo === 3
                ? "azul"
                : "morado"
            }`}
          >
            {data.texto}
          </div>
        ));
  
        cellContent = (
          <div className="cell-with-events scroll-container">
            {eventItems}
          </div>
        );
      }
  
      currentRow.push(
        <td key={columnIndex}>
            <div className="opacity-div">
            {cellContent}
          </div>
          <div className="day-number">{dayNumber}</div>
        </td>
      );
  
      if (currentRow.length === 7 || columnIndex === daysOfMonth.length - 1) {
        rows.push(<tr key={columnIndex}>{currentRow}</tr>);
        currentRow = [];
      }
    });
  
    return rows;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{generateEvents()}</tbody>
      </table>
      <div className="box-leyenda">
        <Legend />
      </div>
    </>
  );
};
