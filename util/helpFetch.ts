export const statusAPI = (response: any): Promise<number> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

export const json = (response: any): Object => {
  return response.json();
};
