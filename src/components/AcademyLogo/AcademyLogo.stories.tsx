import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AcademyLogo } from './AcademyLogo';

export default {} as ComponentMeta<typeof AcademyLogo>;

export const Default: ComponentStory<typeof AcademyLogo> = (args) => <AcademyLogo {...args} />;
