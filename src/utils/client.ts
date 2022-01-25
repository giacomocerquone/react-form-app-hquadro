import axios from "axios";
import store from "../store/store";

export const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

client.interceptors.request.use((config) => {
  // Il getState on è pensato per essere usato nei componenti
  if (store.getState().user.name) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${store.getState().user.name}`,
      },
    };
  }

  return config;
});

client.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    // Quando il server ritorna un errore possiamo mostrare un alert
  }
);
