import { root } from "./config";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ILoginValues } from "../interfaces/ILoginValues";

const instance: AxiosInstance = axios.create({
  baseURL: `${root}`,
});

type FetchedDataType<T> = Promise<AxiosResponse<T>>;
type ApiFetchedDataType = {
  login: (data: ILoginValues) => FetchedDataType<JSON>;
  get: (id: number) => FetchedDataType<JSON>;
  set?: (data: any) => FetchedDataType<JSON>;
};

export const api: ApiFetchedDataType = {
  login: (data) => instance.post(`/posts`, data),
  get: (id) => instance.get(`/posts/${id}`),
};
