import { useRouter } from "next/router";
import { useState } from "react";
import { authenticate } from "@/utils/authenticate";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState("");
  const [passWord, setpassWord] = useState("");
  const router = useRouter();

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassWord(e.target.value);
  };

  const handleClick = () => {
    if (authenticate(user, passWord)) {
      toast.success("Inicio de sesion correcto!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/dashboard");
    } else
      toast.error("Usuario o contraseña Incorrecto!", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: {
          background:
            "linear-gradient(45deg, #e61616ff, #ec9c9cff, #d21a1aff, #ff0000, #df1c1cff, #d20c0cff, #c61313ff)",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "18px",
          borderRadius: "12px",
          border: "3px solid #fff",
          textShadow: "2px 2px 4px #000",
          boxShadow: "0px 0px 20px 5px rgba(200, 30, 30, 0.8)",
        },
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#DBC0E7" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1
          className="text-3xl font-extrabold text-center mb-4"
          style={{ color: "blueviolet" }}
        >
          Mi app
        </h1>
        <h3 className="text-center text-gray-600 mb-6">
          Ingresa usuario y contraseña
        </h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Usuario
          </label>
          <input
            value={user}
            onChange={handleChangeUser}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input
            value={passWord}
            onChange={handleChangePass}
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          onClick={handleClick}
          className="w-full text-white py-2 rounded-md hover:opacity-90 transition duration-200"
          style={{ backgroundColor: "blueviolet" }}
        >
          Ingresar
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;

