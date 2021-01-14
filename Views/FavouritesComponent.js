import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Favourites from "../Components/FavouritesComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("Favourites", module)
  .add("default", () => <Favourites {...myProps} {...actions} />)
  .add("pinned", () => <Favourites {...myProps} pinned={true} {...actions} />)
  .add("archived", () => (
    <Favourites {...myProps} archived={true} {...actions} />
  ));
