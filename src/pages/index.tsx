import { useState } from "react";

  type values = number

export default function Home() {
  
  const [result, setResult] = useState(0);

  const handleCLick =()=>{
    const laSuma = sumar(10,50);

    setResult(laSuma);
  };

  const sumar = (a:values,b:values):values => {
    return a + b
  };


  return (
    <div>
      <div>Hola Mundo</div>
      <button onClick={handleCLick} className="bg-blue-700 miButton">Sumar y mostrar</button>
      <div>{JSON.stringify(result)}</div>
    </div>
  );
};
