import React from 'react';
import { SidebarData, SidebarDataItem } from './SidebarData';
import SidebarIcon from './SidebarIcon';
import './Sidebar.css';

export default function Sidebar(): JSX.Element {
    return (
        <div className='Sidebar'>
            <SidebarIcon />
            <ul className='SidebarList'>
                {SidebarData.map((value: SidebarDataItem, key: number) => (
                    <li
                        className='row'
                        key={key}
                        id={window.location.pathname === value.link ? 'active' : ""}
                        onClick={
                            () => window.location.pathname = value.link
                        }
                    >
                        <div id="icon">{value.icon}</div>
                        <div id="title">{value.title}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}