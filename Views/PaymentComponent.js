import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Payment from "../Components/PaymentComponent";

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

storiesOf("Payment", module)
  .add("default", () => <Payment {...myProps} {...actions} />)
  .add("pinned", () => <Payment {...myProps} pinned={true} {...actions} />)
  .add("archived", () => <Payment {...myProps} archived={true} {...actions} />);
