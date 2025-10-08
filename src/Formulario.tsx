import React, { useState } from "react";
import { Input } from "@heroui/react";

interface DatosFormulario {
  nombre: string;
  email: string;
  edad: number;
}

const Form: React.FC = () => {
    const [DatosFormulario, setDatosFormulario] = useState<DatosFormulario>({ nombre: '', email: '', edad: 0 });
    const [errores, setErrores] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDatosFormulario({
            ...DatosFormulario,
            [e.target.name]: e.target.value,
        });
    };

  const validarForm = (): string[] => {
    const errores: string[] = [];

    if (!DatosFormulario.nombre) errores.push("El nombre es requerido");
    if (!DatosFormulario.email.includes("@"))
      errores.push("El correo debe ser válido");
    if (DatosFormulario.edad <= 18) errores.push("Debes ser mayor de Edad");

    return errores;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const erroresValidacion = validarForm();
    if (erroresValidacion.length > 0) {
      setErrores(erroresValidacion);
    } else {
      alert("Formulario enviado :D");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
<Input label="Nombre:" placeholder="Manolo" name="nombre" value={DatosFormulario.nombre} onChange={handleChange} />
      </div>
      <div>
<Input label="Email" placeholder="Manolo@email.com" name="email" value={DatosFormulario.email} onChange={handleChange} />
      </div>
      <div>
<Input label="Edad:" placeholder="0"  name="edad"  value={DatosFormulario.edad} onChange={handleChange} />
      </div>

      <button type="submit">Enviar</button>

      {errores.length > 0 && (
        <ul>
          {errores.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Form;