import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "@/lib/dbconnection";
import Property, { IProperty } from "@/database/models/properties";

type Data =
  | { ok: true; data?: IProperty[]; message?: string; createdId?: string; updatedId?: string; deletedId?: string }
  | { ok: false; error: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await dbConnection();

  try {
    // -----------------------------
    // GET: obtener todas las propiedades
    // -----------------------------
    if (req.method === "GET") {
      const properties = await Property.find();
      return res.status(200).json({ ok: true, data: properties });
    }

    // -----------------------------
    // POST: crear una nueva propiedad
    // -----------------------------
    if (req.method === "POST") {
      const { name, value, img } = req.body;
      const newProperty = new Property({ name, value, img });
      const savedProperty = await newProperty.save();
      return res.status(201).json({ ok: true, data: [savedProperty], createdId: savedProperty._id });
    }

    // -----------------------------
    // PUT: actualizar una propiedad
    // -----------------------------
    if (req.method === "PUT") {
      const { id, name, value, img } = req.body;

      if (!id) {
        return res.status(400).json({ ok: false, error: "Id is required" });
      }

      const propertyUpdate = await Property.findByIdAndUpdate(id, { name, value, img }, { new: true });

      if (!propertyUpdate) {
        return res.status(404).json({ ok: false, error: "Property not found" });
      }

      return res.status(200).json({ ok: true, message: "property updated", updatedId: id });
    }

    // -----------------------------
    // PATCH: ejemplo de patch
    // -----------------------------
    if (req.method === "PATCH") {
      return res.status(200).json({ ok: true, message: "funciona el patch" });
    }

    // -----------------------------
    // DELETE: eliminar una propiedad
    // -----------------------------
    if (req.method === "DELETE") {
      const { id } = req.query;

      if (!id || typeof id !== "string") {
        return res.status(400).json({ ok: false, error: "Invalid id" });
      }

      const deletedProperty = await Property.findByIdAndDelete(id);

      if (!deletedProperty) {
        return res.status(404).json({ ok: false, error: "Property not found" });
      }

      return res.status(200).json({ ok: true, message: "property deleted", deletedId: id });
    }

    // -----------------------------
    // Método no permitido
    // -----------------------------
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, error: "Internal server error" });
  }
}
