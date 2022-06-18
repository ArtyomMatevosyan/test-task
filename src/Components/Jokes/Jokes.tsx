import { useStore } from "effector-react";
import { useState } from "react";
import { $jokes, getJokeData } from "../../store/allJokesStore";
import { IJokes } from "../../store/model";
import { $favouriteJokes } from "../../store/favouriteJokesStore";
import Button from "../../UI/Button/Button";
import JokeCard from "../JokeCard.tsx/JokeCard";
import "./Jokes.scss";

const Jokes = (): JSX.Element => {
  const allJokes: IJokes[] = useStore($jokes);
  const favouriteJokes: IJokes[] = useStore($favouriteJokes);

  const [intervalId, setIntervalId] = useState<number | NodeJS.Timer>(0);

  const handleFetchDataWithInterval = (): void => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    const newIntervalId = setInterval(() => {
      getJokeData();
    }, 3000);
    setIntervalId(newIntervalId);
  };

  return (
    <div className="jokes">
      <Button text="get joke" onclick={getJokeData} />
      <Button
        text="get joke with interval"
        onclick={handleFetchDataWithInterval}
      />
      <div className="jokes_content">
        {allJokes.map(({ value, id }) => {
          const fav = favouriteJokes.find((joke) => joke.id === id);
          return (
            <JokeCard
              key={id}
              text={value}
              id={id}
              isFavourite={Boolean(fav)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Jokes;
