import axios from "axios";
import { toggleLoader } from "../slices/ui";
import store from "../store/store";

export const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

client.interceptors.request.use((config) => {
  // Il getState on è pensato per essere usato nei componenti
  store.dispatch(toggleLoader());
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
    store.dispatch(toggleLoader());
    return config;
  },
  (error) => {
    store.dispatch(toggleLoader());
    // Quando il server ritorna un errore possiamo mostrare un alert
  }
);
