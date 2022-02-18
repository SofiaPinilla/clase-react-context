import React, { useState } from "react";
import './Form.scss'
const Form = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div className="container box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
