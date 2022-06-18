import { createEffect, createStore } from "effector";
import { fetchJokeData } from "../api/api";
import { IJokes } from "./model";

export const getJokeData = createEffect(async () => {
  const res = await fetchJokeData();
  return res;
});

export const $jokes = createStore<Array<IJokes>>([]).on(
  getJokeData.doneData,
  (jokes, joke) => [...jokes, joke]
);
