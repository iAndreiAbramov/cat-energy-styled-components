import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { STextLogo } from 'styled-elements/STextLogo';

export default {} as ComponentMeta<typeof STextLogo>;

export const Footer: ComponentStory<typeof STextLogo> = (args) => <STextLogo {...args} />;

export const MobileHeader = Footer.bind({});
MobileHeader.args = {
    width: '101px',
    height: '18px',
};
