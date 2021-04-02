const firebaseAPI: string =
  "https://haram-nuxt-default-rtdb.firebaseio.com/girl.json";

function status(response: any): Promise<number> {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function json(response: any): Object {
  return response.json();
}

export const fetchGirls = () =>
  fetch(firebaseAPI)
    .then(status)
    .then(json);
