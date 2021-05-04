import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import CustomButton, { Props } from "./CustomButton";
import Stories from "../stories/StoriesClassNameOverride";

export default {
  title: "Shared/Button",
  component: CustomButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {},
  })
);

const Template: Story<Props> = (args) => (
  <Stories component={CustomButton} args={args} useStyles={useStyles} />
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: "Primary button",
  color: "primary",
  className: "button",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: "Secondary button",
  color: "secondary",
  className: "button",
};
