import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BiotechIcon from '@mui/icons-material/Biotech';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

export type SidebarDataItem = {
	title: string;
	icon: React.ReactNode;
	link: string;
};

export const SidebarData: SidebarDataItem[] = [
	{
		title: 'Home',
		icon: <HomeIcon />,
		link: '/home',
	},
	{
		title: 'About Me',
		icon: < AccountCircleIcon />,
		link: '/about'
	},
	{
		title: 'Research',
		icon: <BiotechIcon />,
		link: '/research'
	},
	{
		title: 'Contact',
		icon: <ContactMailIcon />,
		link: '/contact'
	},
	{
		title: 'Timer',
		icon: <AccessAlarmsIcon />,
		link: '/timer'
	}
]