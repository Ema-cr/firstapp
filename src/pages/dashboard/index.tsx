import { MiButton } from "@/components/button/Button";
import { notification } from "@/utils/utils";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { FiCheck } from "react-icons/fi";
import { Card } from "@/components/card/Card";
import { useState } from "react";



const Dashboard = () => {
const router = useRouter();
const [loader, setLoader] = useState(false);

if(router.route == "/dashboard"){
    console.log(router.asPath);
}

const goToBack = () => {
    router.back();
};

const handleClick = () => {
    notification("sucedio un error", "error" , 4000)
};

const handleClickSuccess = () => {
    notification("sin errores", "success", 8000)
};

const handleClickInfo = () => {
    notification("informacion importante", "info", 10000)
};

const handleClickWarning = () => {
    notification("peligroso", "warning",)
};

const handlerClick = () => {
    setLoader(true);

    setTimeout(() => {
        setLoader(false)
    }, 3000);
};

const handleNot = () => {
    notification("hola", "success")
}

  const cardsData = [
    {
      color: "white",
      title1: "Search engine",
      title2: "optimization",
      linkText: "Learn more",
      imageSrc: "/imagecard1.png",
      arrowIconSrc: "/arrow.png"
    },
    {
      color: "green",
      title1: "Pay-per-click",
      title2: "advertising",
      linkText: "Learn more",
      imageSrc: "/imagecard2.png",
      arrowIconSrc: "/arrow.png"
    },
    {
      color: "black",
      title1: "Social Media",
      title2: "Marketing",
      linkText: "Learn more",
      imageSrc: "/imagecard3.png",
      arrowIconSrc: "/arrow2.png"
    },
    {
      color: "white",
      title1: "Email",
      title2: "Marketing",
      linkText: "Learn more",
      imageSrc: "/imagecard4.png",
      arrowIconSrc: "/arrow.png"
    },
    {
        color: "green",
      title1: "Content",
      title2: "Creation",
      linkText: "Learn more",
      imageSrc: "/imagecard5.png",
      arrowIconSrc: "/arrow.png"
    },
    {
        color: "black",
      title1: "Analytics and",
      title2: "Tracking",
      linkText: "Learn more",
      imageSrc: "/imagecard6.png",
      arrowIconSrc: "/arrow2.png"
    }
  ];


return (
    <div>
        <div>
            <div>Hola world</div><FiCheck />
            <button onClick={goToBack}>Regresar</button><br/>
            <button onClick={handleClick}>error</button><br/>
            <button onClick={handleClickSuccess}>success</button><br/>
            <button onClick={handleClickInfo}>info</button><br/>
            <button onClick={handleClickWarning}>aviso</button><br/>

            <button onClick={handlerClick}>llamar al back</button>

            <MiButton text={"guardar"} icon={"S"}   click={handleNot} disabled/><br/>
            <MiButton text={"cancelar"} icon={<FiCheck/>} loading={loader} click={handlerClick}/>
            <ToastContainer/>
    <div className="container-cards">
             {cardsData.map((card, index) => (
            <Card
                key={index}
                color={card.color as "green" | "white" | "black"}
                title1={card.title1}
                title2={card.title2}
                linkText={card.linkText}
                imageSrc={card.imageSrc}
                arrowIconSrc={card.arrowIconSrc}
          />
        ))}
        </div>
    </div>
    </div>
);
}

export default Dashboard;
