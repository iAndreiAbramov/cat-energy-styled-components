import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HeaderLogo } from './HeaderLogo';

export default {} as ComponentMeta<typeof HeaderLogo>;

export const Default: ComponentStory<typeof HeaderLogo> = (args) => <HeaderLogo {...args} />;
