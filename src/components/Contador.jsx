import { useState } from "react";
const Contador = () => {
  //{/*aqui va la logica del componente*/}
  //let numero = 1;
  //crear un state
const [numero, setNumero]=useState(1)


  const sumar = () => {
    //numero++;
    setNumero(numero + 1)
    console.log(numero);
  };
  return (
    <section className="text-center my-5">
      <h2>Contador</h2>
      <h4>{numero}</h4>
      <button className="btn btn-success me-2" onClick={sumar}>+1</button>
      <button className="btn btn-warning" onClick={()=>setNumero(numero-1)}>-1</button>
    </section>
  );
};

export default Contador;
