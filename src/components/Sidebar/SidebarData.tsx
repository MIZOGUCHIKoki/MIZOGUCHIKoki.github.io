import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
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
        title: 'Career',
        icon: <BusinessCenterIcon />,
        link: '/career'
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