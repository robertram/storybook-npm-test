import React from 'react';

import { Link } from '../components/Link/Link';

export default {
  title: 'Example/Link',
  component: Link,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Link',
};

