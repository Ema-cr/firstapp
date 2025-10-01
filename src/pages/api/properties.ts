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


// await dbConnection();

// const { id } = req.query; 

// const property = await Properties.findById(id);

// console.log(property);

// res.status(200).json({
//   ok: true,
//   data: property as Property,
// });


    if (req.method === "GET") {
      dbConnection()
      const data = await Properties.find({})
    
      res.status(200).json({
        ok: true,
        data: data as Property[]
      });
    }
    if (req.method === 'POST'){
      const {name, value, img} = req.body;
      
      
      const newProperty = new Properties({
        name,value,img
      });

      const savedProperty = newProperty.save()
      console.log(savedProperty)
      
        res.status(200).json({ ok: true, message:"property saved", createdId: savedProperty._id });
    }
    if (req.method === "PUT") {
      const { id, name, value, img } = req.body;

      try {
        const propertyUpdate = await Properties.findByIdAndUpdate(id, {
          name,
          value,
          img,

        }, {new:true});
        console.log(propertyUpdate);
      } catch {
        res.status(400)
      }

      res
        .status(200)
        .json({ ok: true, message: "property update", updatedId: id });
    }
    if (req.method === 'PATCH'){
        console.log('codigo de patch')
        res.status(200).json({ name: "funciona el patch" });
    }
    if (req.method === 'DELETE'){
        const {id} = req.query;
        console.log(id);

        const propertyDeleted = await Properties.findByIdAndDelete(id)
        console.log(propertyDeleted)

        res.status(200).json({ok: true, message:'property deleted', deletedId: `${id}`});
    }


    else {
        res.status(500).json({name:"el metodo no esta permitido"})
    }
} catch (err) {
    console.log(err)
    res.status(500).json ({name:"fallo"})
}
}
