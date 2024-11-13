import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BiotechIcon from '@mui/icons-material/Biotech';

import React from 'react';

export type SidebarDataItem = {
    title: string;
    icon: JSX.Element;
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
    }

]