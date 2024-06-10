import type { Meta, StoryObj } from '@storybook/react';

import Form from './Form';
import { fn } from '@storybook/test';

const meta = {
  title: 'Form',
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    dob: {
      control: 'date',
      description: 'Date of Birth',
    },
  },
  args: { handleSubmit: fn(), handleChange: fn() },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Testname',
    age: 27,
    address: 'Teststreet 15, 98723 Testcity',
    dob: new Date(),
  },
};
