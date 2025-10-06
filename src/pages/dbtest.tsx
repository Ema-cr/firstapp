import { useEffect, useState } from "react";
import axios from "axios";

interface Property {
  _id: string;
  name: string;
  value: number;
  img?: string;
}

interface DataProperties {
  ok: boolean;
  miInfo?: Property[];
}

export default function TestDB() {
  const [dataProperties, setDataProperties] = useState<DataProperties>({ ok: false });
  const [nameInput, setNameInput] = useState("");
  const [valueInput, setValueInput] = useState(0);
  const [imgInput, setImgInput] = useState("");

  const fetchData = async () => {
    const response = await axios.get<DataProperties>("/api/properties");
    setDataProperties(response.data);
  };

  const handleSave = async () => {
    await axios.post("/api/properties", {
      name: nameInput,
      value: valueInput,
      img: imgInput
    });
    fetchData(); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Test MongoDB</h1>
      <div>
        <input placeholder="Nombre" value={nameInput} onChange={e => setNameInput(e.target.value)} />
        <input placeholder="Valor" type="number" value={valueInput} onChange={e => setValueInput(+e.target.value)} />
        <input placeholder="Imagen URL" value={imgInput} onChange={e => setImgInput(e.target.value)} />
        <button onClick={handleSave}>Crear propiedad</button>
      </div>

      <div style={{ marginTop: 20 }}>
        <h2>Propiedades en DB</h2>
        {dataProperties.ok && dataProperties.miInfo?.map(p => (
          <div key={p._id}>
            <strong>{p.name}</strong> - {p.value} <img src={p.img} alt={p.name} style={{ width: 50 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
