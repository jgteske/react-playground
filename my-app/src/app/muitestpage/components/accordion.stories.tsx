import type { Meta, StoryObj } from '@storybook/react';

import { AccordionExample } from './accordion';
import { fn } from '@storybook/test';

const meta = {
  title: 'AccordionExample',
  component: AccordionExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onCancel: fn(), onAgree: fn() },
} satisfies Meta<typeof AccordionExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
