import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Navbar } from './Navbar';


export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;


const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;


export const SideNavbar = Template.bind({});
 SideNavbar.args={
    
   
}
