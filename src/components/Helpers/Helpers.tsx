import React from 'react';
import { SidebarData } from '../Sidebar/SidebarData';

export default function PageTitle(): JSX.Element {
    return (
        <div>
            {SidebarData.map((value, key) => {
                if (value.link === window.location.pathname) {
                    return (
                        <div>
                            <h1>{value.icon} {value.title}</h1>
                        </div>
                    );
                }
                return '';
            })}

        </div>
    );
}