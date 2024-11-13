import React from 'react';
import Icon from '../../images/fig.png';

export default function (): JSX.Element {
    return (
        <div className='SidebarIcon'>
            <img src={Icon} />
            <div>
                <p>溝口 洸熙</p>
                <code>MIZOGUCHI Koki</code>
            </div>
        </div>);
}