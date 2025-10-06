import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
  name: string;
  value: number;
  img?: string;
}

const PropertySchema: Schema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  img: { type: String }
});

export default mongoose.models.Property || mongoose.model<IProperty>("Property", PropertySchema);
