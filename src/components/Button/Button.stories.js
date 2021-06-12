import React from "react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Button",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  text: "Button",
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = { text: "Button", secondary: true };

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = { text: "Button", secondary: true, disabled: true };

export const LinkButton = Template.bind({});
LinkButton.args = { text: "Button", linkButton: true };

export const LinkButtonDisabled = Template.bind({});
LinkButtonDisabled.args = { text: "Button", linkButton: true, disabled: true };

export const LinkButtonSmall = Template.bind({});
LinkButtonSmall.args = { text: "Button", linkButtonSmall: true };

export const LinkButtonSmallDisabled = Template.bind({});
LinkButtonSmallDisabled.args = {
  text: "Button",
  linkButtonSmall: true,
  disabled: true,
};

export const Fab = Template.bind({});
Fab.args = { text: "Button", fab: true };

export const FabDisabled = Template.bind({});
FabDisabled.args = {
  text: "Button",
  fab: true,
  disabled: true,
};
