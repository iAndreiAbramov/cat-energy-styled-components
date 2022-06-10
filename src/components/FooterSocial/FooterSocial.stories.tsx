import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FACEBOOK_SOCIAL, INSTA_SOCIAL, VK_SOCIAL } from 'constants/socials';

import { FooterSocial } from './FooterSocial';

export default {} as ComponentMeta<typeof FooterSocial>;

export const VKontakte: ComponentStory<typeof FooterSocial> = (args) => <FooterSocial {...args} />;
VKontakte.args = {
    social: VK_SOCIAL,
};

export const Instagram: ComponentStory<typeof FooterSocial> = (args) => <FooterSocial {...args} />;
Instagram.args = {
    social: INSTA_SOCIAL,
};

export const Facebook: ComponentStory<typeof FooterSocial> = (args) => <FooterSocial {...args} />;
Facebook.args = {
    social: FACEBOOK_SOCIAL,
};
