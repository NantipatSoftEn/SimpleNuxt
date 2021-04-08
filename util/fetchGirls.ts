import { json, statusAPI } from "./helpFetch";

const firebaseAPI: string =
  "https://haram-nuxt-default-rtdb.firebaseio.com/girl.json";

export const fetchGirls = () =>
  fetch(firebaseAPI)
    .then(statusAPI)
    .then(json);
