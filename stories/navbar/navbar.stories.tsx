import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopNavbar } from './TopNavbar';

import { Navbar } from './Navbar';


export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;



const topNavbarTemplate :ComponentStory<typeof TopNavbar> = (args) => <TopNavbar {...args} />;
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;


export const SideNavbar = Template.bind({});
 SideNavbar.args={
    
}

export const projectLevelNavbar = topNavbarTemplate.bind({});
 projectLevelNavbar.args={
    title:"hello"
}