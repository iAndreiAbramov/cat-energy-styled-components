import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SHeaderTextLogo } from 'styled-elements/STextLogo';

export default {} as ComponentMeta<typeof SHeaderTextLogo>;

export const Header: ComponentStory<typeof SHeaderTextLogo> = (args) => (
    <SHeaderTextLogo {...args} />
);
