import React from 'react';

import { SidebarData } from './SidebarData';

import './Sidebar.css';
import Icon from '../../images/fig.png';

function Sidebar() {

	return (
		<div className='sidebar'>
			<div>
				{topIcon}
				<ul>
					{SidebarData.map((item, index) => {
						return (
							<li key={index}
								onClick={() => {
									window.location.pathname = item.link;
								}}
								className={`sidebar-item${window.location.pathname === item.link ? ' active' : ''}`}
							>
								<div>
									<div>{item.icon}</div>
									<div>{item.title}</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

const topIcon = (
	<div className='sidebar-top-icon'>
		<img
			src={Icon}
			alt="Icon"
		/>
		<div>
			<p>溝口 洸熙</p>
			<code>MIZOGUCHI Koki</code>
		</div>
	</div>
);

export default Sidebar;