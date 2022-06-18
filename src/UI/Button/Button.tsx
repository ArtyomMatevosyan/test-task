import { FC } from "react";
import { TButtonProps } from "./model";
import "./Button.scss";

const Button: FC<TButtonProps> = ({ onclick, text }): JSX.Element => {
  return (
    <button className="button" onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
