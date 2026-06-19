import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BiotechIcon from '@mui/icons-material/Biotech';

export type SidebarDataItem = {
	label: string;
	title: string;
	icon: React.ReactNode;
};

export const SidebarData: SidebarDataItem[] = [
	{
		label: 'home',
		title: 'Home',
		icon: <HomeIcon />,
	},
	{
		label: 'about',
		title: 'About Me',
		icon: < AccountCircleIcon />,
	},
	{
		label: 'activity',
		title: 'Activity',
		icon: <BiotechIcon />,
	},
	{
		label: 'contact',
		title: 'Contact',
		icon: <ContactMailIcon />,
	},
]