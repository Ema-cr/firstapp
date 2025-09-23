
interface MiButtonProps{
    text:string;
    icon:string;
}

export const MiButton = ({text, icon}:MiButtonProps)=>{

    const handleClick = ()=>{
        console.log("se hizo click en el boton del componente")
    };
  
    return(
        <button onClick={handleClick} className="dashboard--button">
            <div>{text}</div>
            <div>{icon}</div>
        </button>
    );
};