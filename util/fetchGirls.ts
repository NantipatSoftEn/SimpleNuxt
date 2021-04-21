import { json, statusAPI } from "./helpFetch";
import axios from "axios";
export const firebaseAPI: string =
  "https://haram-nuxt-default-rtdb.firebaseio.com";

export const fetchGirls = (id: String) =>
  fetch(`${firebaseAPI}/${id}`)
    .then(statusAPI)
    .then(json);

export const postGirl = (collection: String, data: Object) =>
  axios
    .post(`${firebaseAPI}/${collection}`, data)
    .then(statusAPI)
    .then(res => res);

export const deleteGirl = (id: String) =>
  axios
    .delete(`${firebaseAPI}/${id}`)
    .then(statusAPI)
    .then(res => res);

export const editGirl = (id: String, data: Object) =>
  axios
    .put(`${firebaseAPI}/${id}`, data)
    .then(statusAPI)
    .then(res => res);
