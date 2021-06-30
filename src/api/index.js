import { CONFIG } from "./config";

export const api = {
  get: async (endpoint) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`${CONFIG.api_base_url + endpoint}`, requestOptions)
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => error);
  },
};
