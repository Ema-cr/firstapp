import { usuarios } from "./utils"


export const authenticate = (name: string, passWord:string) => {
    if (name == "" || passWord == "") {
        alert("Debes ingresar usuario y contraseña");
        return false;
    }

const userFound = usuarios.find((item) => item.name == name);
if (!userFound) {
    return false;
}

if (userFound.passWord === passWord){
    return true;
} else {
    return false;   
}
};