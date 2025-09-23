import { useState } from "react";
import { cars } from "../utils/utils"
import Login from './login/index';
import { ToastContainer, toast } from "react-toastify";

  type values = number

export default function Home() {
  // const [result, setResult] = useState(0);

  // const handleCLick =()=>{
  //   const laSuma = sumar(10,50);

  //   setResult(laSuma);
  // };
  
  // <button onClick={handleCLick}>Ingresar</button>
  // console.log(result)

  // const sumar = (a:values,b:values):values => {
  //   return a + b
  // };

  return (
    

    // <div className="container-cars">
    //    {cars?.map((carro, index) => (
    //      <div className="bg-blue-200" key={index}>
    //         <div className="bg-blue-700 model">{carro.model}</div>
    //         <div className="bg-blue-600 brand">{carro.brand}</div>
    //         <div className="bg-blue-500 cc">{carro.cc}</div>
    //         <div className="bg-blue-400 traction">{carro.traction}</div>
    //         <div className="bg-blue-300 motor">{carro.motor}</div>
    //         <div>Login</div>
    //     </div>
    // ))}
    // </div>

  <div>
    <Login></Login>
  </div>


  );
};


// function indentify <T>(parametro:T):T{
//   return parametro
// }

// const result = indentify<number>(15)
// const result2 = indentify<string>("A");
// const result3 = indentify<boolean>(true);

// console.log(result)
// console.log(result2)
// console.log(result3)

const arrayNum = [2,54,6,8,3,4];
const arrayStr = ["B","A","3","s","T","z"]
const arrayBln = [true, false]

const returnFirstElement = <T,>(array:T[]):T =>{
  return array[0]
}

const returnLastElement = <T,>(array:T[]):T =>{
  return array[array.length -1]
}

const last = returnLastElement<string>(arrayStr);
console.log(last)

const resul = returnFirstElement<string>(arrayStr);
console.log(resul)

//--------------------------------------------------------

const reverseArray = <T,>(array:T[]):T[] =>{
  return array.reverse()
}

const reversedNumbers = reverseArray<string>(arrayStr);
console.log(reversedNumbers)

const reverseArray2 = <T,>(array:T[]):T[] =>{
  return array.reverse()
}

const reversedStrings = reverseArray2<number>(arrayNum);
console.log(reversedStrings)


//---------------------------------------------

const triplenumb = <T,>(value:T):T[] =>{
  const numbers = Array(13).fill(value);
  return numbers
}

const resultt = triplenumb(4)
console.log(resultt)

//-------------------------------------------

const triplestr = <T,>(value:T):T[] =>{
  const letras = Array(13).fill(value);
  return letras
}

const result2 = triplestr("alfonso")
console.log(result2)

// --------------------------------------
