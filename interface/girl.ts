export interface IGirl {
  name: string;
  facebook: string | null;
  instrgram: string | null;
  description: string | null;
  age: number;
  url: string;
  date: String;
}

export interface IGirl2 {
  [key: string]: IGirl;
}
export interface IUpload {
  storage: any;
  file: File;
  nameOwner: string;
  url: string;
}

export interface IStatus {
  status: number;
  statusText: string;
}

export interface IEdit {
  id: String;
  girl: IGirl;
}
