import { API_URL } from "./constants";

const sendMessage = async (message, setStatus) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.status);
  }
  setStatus(response.status);
};

export default sendMessage;
