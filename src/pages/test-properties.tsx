import { useEffect, useState } from "react";
import axios from "axios";

interface Property {
  _id: string;
  name: string;
  value: number;
  img: string;
}

export default function TestProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState<number>(0);
  const [img, setImg] = useState("");

  const fetchProperties = async () => {
    const res = await axios.get("/api/properties");
    setProperties(res.data.miInfo);
  };

  const handleCreate = async () => {
    await axios.post("/api/properties", { name, value, img });
    setName(""); setValue(0); setImg("");
    fetchProperties();
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Test MongoDB Properties</h1>

      <div className="mb-4">
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-1 mr-2" />
        <input placeholder="Value" type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} className="border p-1 mr-2" />
        <input placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)} className="border p-1 mr-2" />
        <button onClick={handleCreate} className="bg-blue-500 text-white px-2 py-1">Create</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {properties.map((prop) => (
          <div key={prop._id} className="border p-2">
            <div>{prop.name}</div>
            <div>{prop.value}</div>
            <img src={prop.img} alt={prop.name} className="w-full h-32 object-cover mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
