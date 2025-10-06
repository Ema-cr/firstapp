import axios from "axios";


export const getProperties = async () => {
  const response = await axios.get("/api/properties");
  return response.data.miInfo
};

export const createProperty = async () => {
  const response = await axios.post("/api/properties",{
    
  });
  return response.data.miInfo
};