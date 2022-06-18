import { useState } from "react";
import FavouriteJokes from "../FavouriteJokes/FavouriteJokes";
import Jokes from "../Jokes/Jokes";
import { TabState } from "./model";
import "./HomePage.scss";

const HomePage = (): JSX.Element => {
  const [tab, setTab] = useState<TabState>(TabState.ALL_JOKES);
  let component;
  switch (tab) {
    case TabState.ALL_JOKES:
      component = <Jokes />;
      break;
    case TabState.FAVOURITE_JOKES:
      component = <FavouriteJokes />;
      break;
    default:
      break;
  }

  const handleChangeTab = (tabId: number): void => {
    setTab(tabId);
  };

  return (
    <div className="home">
      <div className="home_tabs">
        <div className="home_tabs_item" onClick={() => handleChangeTab(1)}>
          All Jokes
        </div>
        <div className="home_tabs_item" onClick={() => handleChangeTab(2)}>
          Favourites
        </div>
      </div>
      {component}
    </div>
  );
};

export default HomePage;
