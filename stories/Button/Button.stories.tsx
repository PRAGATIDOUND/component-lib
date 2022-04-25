import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import checkicon from '../assets/check.svg';
 import close from '../assets/Close-Small.svg';
 import add from '../assets/Add.svg';
 //import heart from '../assets/heart.svg';

import { Button } from './Button';


export default {
  title: 'Button',
  component: Button,
  
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonFilled = Template.bind({});
ButtonFilled.args = {
  primary: true,
  label: 'Default',
};

export const Critical = Template.bind({});
Critical.args = {
  primary: false,
  label: 'Button',
};
export const closeButton = Template.bind({});
closeButton.args = {
  primary: false,
  source: close,
  label:"",
  containOnlyIcon:true,
  iconClass:'closeimage',
};

export const checkButton = Template.bind({});
checkButton.args = {
  primary: true,
  source: checkicon,
  containOnlyIcon:true,
  label:"",
  iconClass:'checkimage',
};
export const criticalWithIcon = Template.bind({});
criticalWithIcon.args = {
  primary: false,
  source: add,
  containOnlyIcon:true,
  label:"Default",
  iconClass:'addimagec',
};

