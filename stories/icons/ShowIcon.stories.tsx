import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { ShowIcon } from './ShowIcon';


export default {
  title: 'icons',
  component: ShowIcon,
  
  argTypes: {
     Name: { control: 'text' } ,
     className: {
      control: 'radio',
      options: ['small', 'medium', 'large','x-large'],
    },
    stroke:{
      control: {
        type: 'color',
        presetsColors: ['#ff0000', '#00ff00', '#0000ff'],
      },
    },
   fill:{
      control: {
        type: 'color',
        presetsColors: ['#ff0000', '#00ff00', '#0000ff'],
      },
    }
  },
} as ComponentMeta<typeof ShowIcon>;


const Template: ComponentStory<typeof ShowIcon> = (args) => <ShowIcon {...args} />;

export const Markup = Template.bind({});
Markup.args = {
  Name:"markup",
  className:"small"
};
export const Select = Template.bind({});
Select.args = {
  Name:"select"
};
export const ImageSearch = Template.bind({});
ImageSearch.args = {
  Name:"ImageSearch"
};
export const Reaction = Template.bind({});
Reaction.args = {
  Name:"Reaction"
}