import React from 'react';
import './Sidebar.css';
import { SidebarData, SidebarDataItem } from './SidebarData';

interface NavigationbarProps {
	setCurrentPage: (page: string) => void;
	currentPage: string;
}

export default function Navigationbar({ setCurrentPage, currentPage }: NavigationbarProps) {
	return (
		<nav>
			<ul>
				{SidebarData.map((value: SidebarDataItem, key: number) => (
					<li
						key={`Navigation_${key}`}
						id={currentPage === value.label ? 'active' : ""}
						onClick={
							() => setCurrentPage(value.label)
						}
					>
						<div id="icon">{value.icon}</div>
					</li>
				))}
			</ul>
		</nav>
	);
}