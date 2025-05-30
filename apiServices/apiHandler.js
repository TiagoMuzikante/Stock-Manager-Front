import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

export const handler = {
  get(target, prop) {
    const route = target[prop];
    if (!route) return undefined;
    return (...params) => {
      const {method, url, data} = route(...params);
      return axios({baseURL, url, method, data})
          .then((response) => response.data)
          .catch((error) => {
            console.error(`Erro na requisição para ${url}:`, error);
            throw error;
          });
    };
  }
}