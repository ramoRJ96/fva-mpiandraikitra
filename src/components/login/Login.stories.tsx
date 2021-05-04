import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Login, { Props } from "./Login";
import Stories from "../shared/stories/StoriesClassNameOverride";

export default {
  title: "LOGIN/Login",
  component: Login,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: 30,
    },
  })
);

const Template: Story<Props> = (args) => (
  <Stories component={Login} args={args} useStyles={useStyles} />
);

export const DefaultLogin = Template.bind({});
DefaultLogin.args = {};
