import axios from "axios";

const registerUser = async (credentials) => {
  const { data } = await axios.post(
    "http://localhost:5000/auth/register",
    credentials,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

const loginUser = async (credentials) => {
  const { data } = await axios.get("http://localhost:5000/auth/login",
  {
    headers: {
      "Content-Type": "application/json",
    },
    params: credentials
  });
  
  return data;
};

export default { registerUser, loginUser };
