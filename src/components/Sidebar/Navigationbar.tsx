import React from 'react';
import { SidebarData, SidebarDataItem } from './SidebarData';
import SidebarIcon from './SidebarIcon';

export default function Navigationbar(): JSX.Element {
    return (
        <nav>
            {/* <SidebarIcon /> */}
            <ul>
                {SidebarData.map((value: SidebarDataItem, key: number) => (
                    <li
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
        </nav>
    );
}