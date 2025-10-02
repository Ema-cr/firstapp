import { useEffect, useState } from "react";
import Login from './login/index';
import { ToastContainer, toast } from "react-toastify";
import { createProperty, getProperties } from "@/services/properties";
import async from "./api/properties"

 interface propertyProps {
    _id:string
    name:string,
    value: number,
    img: string
  }


  interface dataProperties {
    ok: string,
    miInfo:propertyProps[]
  }


export default function Home() {

const [dataProperties, setDataProperties] = useState({} as dataProperties);
const [count, setCount] = useState(0);

const handleClick = async () => {
  const response = await getProperties();
  setDataProperties(response);
};


useEffect(() => {
  const fechData =  async () =>{
    const response = await getProperties();
    setDataProperties(response);
  };
  fechData();
},[]);

console.log(dataProperties.miInfo)

 const handlseSave = () =>{
    

     createProperty({
       name: nameImput,
       Value: valueImput,
      img: imgInput,
    })

  }


   return (
    <div>
      <div>
        <div>Hola mundo</div>
        <div className="flex gap-2">
          {/* <MiButton text={"llamar endpoin"} icon={""} click={ handleClick } /> */}
          {/* <button onClick={handleClick}>llamar endpoint</button> */}
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +1
          </button>
        </div>

        {dataProperties.ok && (
          <div className="flex gap-2">
            {dataProperties.miInfo.map((property) => (
              <div key={property._id}>
                <div>{property.name}</div>
                <div>{property.value}</div>
                <img src={property.img} alt={property.name} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div>

       
       <button onClick={handlseSave} >guardar propiedad</button>
      </div>
      <ToastContainer />
    </div>
  );
}

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
console.log(result2);

// --------------------------------------
