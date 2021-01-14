import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Content from "../Components/ContentComponent";

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

storiesOf("Content", module)
  .add("default", () => <Content {...myProps} {...actions} />)
  .add("pinned", () => <Content {...myProps} pinned={true} {...actions} />)
  .add("archived", () => <Content {...myProps} archived={true} {...actions} />);
