import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import checkicon from '../assets/check.svg';
//  import close from '../assets/Close-Small.svg';
  import add from '../assets/Add.svg';
  import heart from '../assets/heart.svg';

import { TextBtn} from './TextBtn';


export default {
  title: 'Button',
  component: TextBtn,
  
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextBtn>;


const Template: ComponentStory<typeof TextBtn> = (args) => <TextBtn {...args} />;

export const textSecondaryaa = Template.bind({});
textSecondaryaa.args = {
    textPrimary:false,
    label:'Default',
};
export const TextPrimary = Template.bind({});
TextPrimary.args = {
  textPrimary:true,
  label:'Default',
  
};
export const OutlineHeart = Template.bind({});
OutlineHeart.args = {
  textPrimary:true,
  source: heart,
  containOnlyIcon:true,
  iconClass:'heartimage',
};
export const plusTextPrimary = Template.bind({});
plusTextPrimary.args = {
  textPrimary:true,
  label:'Default',
  source: add,
  containOnlyIcon:true,
  iconClass:'plusImage',
};
export const plusTextSecondary = Template.bind({});
plusTextSecondary.args = {
  textPrimary:false,
  label:'Default',
  source: add,
  containOnlyIcon:true,
  iconClass:'plusImage',
};
export const plusTextCritical = Template.bind({});
plusTextCritical.args = {
  textCritical:true,
  label:'Default',
  source: add,
  containOnlyIcon:true,
  iconClass:'plusImage',
};
export const TextCritical = Template.bind({});
TextCritical.args = {
  textCritical:true,
  label:'Default',

};


