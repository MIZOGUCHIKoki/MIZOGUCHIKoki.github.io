import React from 'react';
import './Sidebar.css';
import { SidebarData, SidebarDataItem } from './SidebarData';

export default function Navigationbar() {
	return (
		<nav>
			<ul>
				{SidebarData.map((value: SidebarDataItem, key: number) => (
					<li
						key={`Navigation_${key}`}
						id={window.location.pathname === value.link ? 'active' : ""}
						onClick={
							() => window.location.pathname = value.link
						}
					>
						<div id="icon">{value.icon}</div>
						{/* <div id="title">{value.title}</div> */}
					</li>
				))}
			</ul>
		</nav>
	);
}