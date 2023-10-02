import React, { useState } from "react";

export const Legend = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <p className="leyenda" style={{ color:"red" }}>
        <span style={{ paddingRight: "10px" }}>Máxima prioridad</span>
        <input
        className="input-check"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </p>
      <p className="leyenda" style={{ color:"blue" }}>
      <span style={{ paddingRight: "10px" }}> Planificación de trabajo</span>
        <input
        className="input-check"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </p>
      <p className="leyenda" style={{ color:"purple" }}>
      <span style={{ paddingRight: "10px" }}>Incidencia leve</span>
        <input 
        className="input-check"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </p>
      <p className="leyenda" style={{ color: "yellow" }}>
      <span style={{ paddingRight: "10px" }}>tarea</span>
        <input
        className="input-check"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </p>
    </div>
  );
};
