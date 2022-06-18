import { createEvent, createStore } from "effector";
import { $jokes } from "./allJokesStore";
import { IJokes } from "./model";

export const removeFavouriteJoke = createEvent<string>();
export const addJokeToFavourite = createEvent<string>();
export const resetFavouriteJokes = createEvent();
export const $favouriteJokes = createStore<IJokes[]>(
  JSON.parse(localStorage.getItem("jokes") as string) || []
)
  .on(removeFavouriteJoke, (state, id) => {
    state = state.filter((item) => item.id !== id);
    localStorage.setItem("jokes", JSON.stringify(state));
    return state;
  })
  .on(addJokeToFavourite, (state, id) => {
    const allJokes = $jokes.getState();
    const favouriteJoke = allJokes.find((joke) => joke.id === id);
    const doesExist = state.find((joke) => joke.id === id);
    if (state.length === 10) {
      state.shift();
    }
    if (doesExist === undefined) {
      const updatedState = [...state, favouriteJoke as IJokes];
      localStorage.setItem("jokes", JSON.stringify(updatedState));
      return updatedState;
    } else {
      state = state.filter((joke) => joke !== doesExist);
      localStorage.setItem("jokes", JSON.stringify(state));
      return state;
    }
  })
  .on(resetFavouriteJokes, () => {
    localStorage.setItem("jokes", JSON.stringify([]));
    return [];
  });
