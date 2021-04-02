import { json, statusAPI } from "./helpFetch";

const todosAPI: string = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodosDecor = () =>
  fetch(todosAPI)
    .then(statusAPI)
    .then(json);
