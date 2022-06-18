import { useStore } from "effector-react";
import { $favouriteJokes, resetFavouriteJokes } from "../../store/favouriteJokesStore";
import Button from "../../UI/Button/Button";
import FavouriteJokeCard from "./FavouriteJokesCard/FavouriteJokeCard";
import "./FavouriteJokes.scss";

const FavouriteJokes = (): JSX.Element => {
  const favouriteJokes = useStore($favouriteJokes);
  return (
    <div className="favourites">
      <Button text="delete all jokes" onclick={resetFavouriteJokes} />
      <div className="favourites_content">
        {favouriteJokes.map(({ id, value }) => (
          <FavouriteJokeCard key={id} text={value} id={id} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteJokes;
