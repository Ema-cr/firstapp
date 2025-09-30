import Properties from "@/database/models/properties";
import dbConnection from "@/lib/dbconnection";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  error?: Error
};

interface Property {
  _id: string;
  name: string;
  value: number;
  img?: string;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

    try{

    if (req.method === "GET") {
      dbConnection()
      const data = await Properties.find()
      console.log(data)

      res.status(200).json({
        ok: true,
        data: data as Property[]
      });
    }
    if (req.method === 'POST'){
        console.log('codigo de post')
        res.status(200).json({ name: "funciona el post" });
    }
    if (req.method === 'PUT'){
        console.log('codigo de put')
        res.status(200).json({ name: "funciona el put" });
    }
    if (req.method === 'PATCH'){
        console.log('codigo de patch')
        res.status(200).json({ name: "funciona el patch" });
    }
    if (req.method === 'DELETE'){
        console.log('codigo de delete')
        res.status(200).json({ name: "funciona el delete" });
    }
    else {
        res.status(500).json({name:"el metodo no esta permitido"})
    }
} catch (err) {
    console.log(err)
    res.status(500).json ({name:"fallo"})
}
}
