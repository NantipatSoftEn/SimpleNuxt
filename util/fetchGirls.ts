import firebaseAPI from "../constants/firebaseAPI";

function status(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function json(response: any) {
  return response.json();
}

export const fetchGirls = () =>
  fetch(firebaseAPI)
    .then(status)
    .then(json);
