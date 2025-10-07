import { createContext } from "react";
export interface UserLog {
  name: string;
  role: string;
  isActive: boolean;
  date: string;
}

export interface objectProps {
  name: string;
price: number
}

export type contextProps = {
  userLogged: UserLog;
  setUserLogged: (userLogged: UserLog) => void;
  isActive: boolean,
  setIsActive: (isActive:boolean)=>void,
  miObject:objectProps

};

export const MyContext = createContext<contextProps>({} as contextProps);