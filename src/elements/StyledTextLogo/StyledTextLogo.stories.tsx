import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StyledTextLogo } from './index';

export default {} as ComponentMeta<typeof StyledTextLogo>;

export const Footer: ComponentStory<typeof StyledTextLogo> = (args) => <StyledTextLogo {...args} />;

export const MobileHeader = Footer.bind({});
MobileHeader.args = {
    width: '101px',
    height: '18px',
};
