import type { Meta, StoryObj } from '@storybook/react';

import { Profile } from './Profile';
import { fn } from '@storybook/test';

const meta = {
  title: 'GoodBase/Profile',
  component: Profile,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: 'New User',
  },
};

export const UserImageAndBanner: Story = {
  args: {
    userName: 'Image Banner',
    image:
      'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    bannerImage:
      'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
  },
};

export const Badge: Story = {
  args: {
    userName: 'Badge',
    badgeContent: 23,
    bannerImage:
      'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
  },
};

export const Social: Story = {
  args: {
    userName: 'Social',
    image:
      'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://facebook.com/',
  },
};
