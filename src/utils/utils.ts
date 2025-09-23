import { User } from "@/Dto/Users"
import { type } from '../../.next/types/routes';
import { toast } from "react-toastify";

const sumar = (prop1:number, prop2:number) =>{
    return prop1 + prop2
}

const multiplicar = (prop1:number, prop2:number) =>{
    return prop1 * prop2
}

const restar = (prop1:number, prop2:number) =>{
    return prop1 - prop2
}

export const PI:number = 3.1416


export const cars = [
    { motor: "V8", traction: "RWD", cc: 1233, model: "M3 GTR", brand: "BMW" },
    { motor: "V6", traction: "AWD", cc: 2995, model: "GT-R", brand: "Nissan" },
    { motor: "W16", traction: "AWD", cc: 7993, model: "Chiron", brand: "Bugatti" },
    { motor: "V10", traction: "RWD", cc: 5204, model: "Huracán", brand: "Lamborghini" },
    { motor: "V12", traction: "RWD", cc: 6262, model: "F12 Berlinetta", brand: "Ferrari" },
    { motor: "Electric", traction: "AWD", cc: 0, model: "Model S Plaid", brand: "Tesla" }
];


export const usuarios:User [] = [
    {id:1 , name: "david", passWord: "david123"},
    {id:2, name: "stiven", passWord: "stiven123"},
    {id:3 , name: "alfonso", passWord: "alfonso123"},
    {id:4 , name: "mauro", passWord: "mauro123"},
    {id:5 , name: "salomon", passWord: "salomon123"},
    {id:6 , name: "manolo", passWord: "manolo123"},
];

export{
    sumar,
    multiplicar,
    restar
}

export class UserStore {
    private users: User [] = [];
    private nextId: number = 1;

    create(name: string, passWord: string): User {
        const newUser: User = {
            id: this.nextId++,
            name,
            passWord,
        };
        this.users.push(newUser);
        return newUser;
    }
}
type notification = "error" | "success" | "info" | "warning"
export const notification = (text:string, type:notification,time?:number) =>{
    if (type === "success"){
        toast.success(text, {
                position: "top-right",
                autoClose: time ?? 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (type === "error"){
               toast.error(text, {
                position: "top-right",
                autoClose: time ?? 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
         if (type === "info"){
               toast.info(text, {
                position: "top-right",
                autoClose: time ?? 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        if (type === "warning"){
               toast.warning(text, {
                position: "top-right",
                autoClose: time ?? 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
}


