import { FC } from "react";
import { removeFavouriteJoke } from "../../../store/favouriteJokesStore";
import Button from "../../../UI/Button/Button";
import "../FavouriteJokes.scss";
import { TJokeCardProps } from "../model";

const FavouriteJokeCard: FC<TJokeCardProps> = ({ text, id }): JSX.Element => {
  return (
    <div className="favourites_card">
      <div>{text}</div>
      <Button text="remove joke" onclick={() => removeFavouriteJoke(id)} />
    </div>
  );
};

export default FavouriteJokeCard;
