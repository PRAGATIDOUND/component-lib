import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

 //import heart from '../assets/heart.svg';

import { InputField } from './InputField';


export default {
  title: 'InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>;


const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Input = Template.bind({});
export const SearchInput = Template.bind({});
SearchInput.args={
searchIcon:true
};

