import { json, statusAPI } from "./helpFetch";
import axios from "axios";
export const firebaseAPI: string =
  "https://haram-nuxt-default-rtdb.firebaseio.com";

export const fetchGirls = (query: string) =>
  fetch(`${firebaseAPI}/${query}`)
    .then(statusAPI)
    .then(json);
