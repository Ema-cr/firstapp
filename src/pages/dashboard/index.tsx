import { MiButton } from "@/components/button/Button";
import { notification } from "@/utils/utils";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";



const Dashboard = () => {

const router = useRouter();

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


return (
    <div>
        <div>
            <div>Hola world</div>
            <button onClick={goToBack}>Regresar</button><br/>
            <button onClick={handleClick}>error</button><br/>
            <button onClick={handleClickSuccess}>success</button><br/>
            <button onClick={handleClickInfo}>info</button><br/>
            <button onClick={handleClickWarning}>aviso</button><br/>
            <MiButton text={"guardar"} icon={"S"}/>
            <MiButton text={"cancelar"} icon={"X"}/>
            <ToastContainer/>
        </div>
    </div>
);
}

export default Dashboard;
