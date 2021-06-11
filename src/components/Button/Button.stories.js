import React from "react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: "Button",
  className: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Button",
  className: "SecondaryButton",
  size: "large",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  text: "Button",
  className: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  text: "Button",
  className: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "Button",
  className: "Button",
};
