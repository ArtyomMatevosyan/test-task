import { FC } from "react";
import { addJokeToFavourite } from "../../store/favouriteJokesStore";
import Button from "../../UI/Button/Button";
import { TJokeCardProps } from "./model";
import "./JokeCard.scss";

const JokeCard: FC<TJokeCardProps> = ({
  text,
  id,
  isFavourite,
}): JSX.Element => {
  return (
    <div className="card">
      <p>{text}</p>
      <Button
        text={isFavourite ? "remove joke" : "add to favourite"}
        onclick={() => addJokeToFavourite(id)}
      />
    </div>
  );
};

export default JokeCard;
