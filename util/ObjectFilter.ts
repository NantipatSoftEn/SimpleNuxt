export const filter = (obj: any, predicate: Function) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res: any, key: any) => ((res[key] = obj[key]), res), {});
