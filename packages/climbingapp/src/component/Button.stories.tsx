import { GrayButton, PurpleButton } from './Button';
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'App/button',
    component: GrayButton,
} as ComponentMeta<typeof GrayButton>;

export const Gray: ComponentStory<typeof GrayButton> = () => <GrayButton onPress={() => { }}></GrayButton>;

export const Purple: ComponentStory<typeof PurpleButton> = () => <PurpleButton onPress={() => { }}></PurpleButton>; 