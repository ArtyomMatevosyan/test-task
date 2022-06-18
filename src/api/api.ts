import axios from "axios";
import { IJokes } from "../store/model";

const api = axios.create({
  baseURL: "https://api.chucknorris.io/",
});

export const fetchJokeData = async (): Promise<IJokes> =>
  await api.get("jokes/random").then((res) => res.data);
