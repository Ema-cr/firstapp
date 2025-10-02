import dbConnection from "@/lib/dbconnection";
import type { NextApiRequest, NextApiResponse } from "next";
import Properties from '@/database/models/properties';


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

type GetResponse = { ok: true; data: Property[] };
type PostResponse = { ok: true; message: string; createdId?: string };
type PutResponse = { ok: true; message: string; updatedId?: string };
type DeleteResponse = { ok: true; message: string; deletedId?: string };
type ErrorResponse = { ok: false; error: string };



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req.method)

  try {
    dbConnection();

     if (req.method === "GET") {

      const data = await Properties.find();

      res.status(200).json({
        ok: true,
        miInfo: data as Property[],
      });
    }

   if (req.method === "POST") {
      const { name, value, img } = req.body;

      try {
        const newProperty = new Properties({
          name,
          value,
          img,
        });

        const savedProperty = await newProperty.save();

        return res.status(201).json({
          ok: true,
          message: "property saved",
          createdId: savedProperty._id,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: "internal server error" });
      }
    }

if (req.method === "PUT") {
      const { id, name, value, img } = req.body;

      try {
        const propertyUpdate = await Properties.findByIdAndUpdate(
          id,
          {
            name,
            value,
            img,
          },
          { new: true }
        );
        console.log(propertyUpdate);
      } catch {
        res.status(400);
      }

      res
        .status(200)
        .json({ ok: true, message: "property update", updatedId: id });
    }


    if (req.method === 'PATCH'){
        console.log('codigo de patch')
        res.status(200).json({ name: "funciona el patch" });
    }


  if (req.method === "DELETE") {
      const { id } = req.query;
      console.log(id);

      await Properties.findByIdAndDelete(id);

      res
        .status(200)
        .json({ ok: true, message: "property deleted", deletedId: `${id}` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      error: "Internal server error",
    });
  }
}
