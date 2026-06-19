import React from 'react';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import Icon from '../../images/fig.png';

interface SidebarProps {
	setCurrentPage: (page: string) => void;
	currentPage: string;
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

const status = (
	<div style={{ textAlign: 'left', marginLeft: '5px' }}>
		<a href='https://github.com/MIZOGUCHIKoki/MIZOGUCHIKoki.github.io/actions/workflows/lint.yaml' target='_blank' rel='noopener noreferrer'>
			<img src='https://github.com/MIZOGUCHIKoki/MIZOGUCHIKoki.github.io/actions/workflows/lint.yaml/badge.svg' alt='GitHub Actions Status' />
		</a>
	</div>
);

function Sidebar({ setCurrentPage, currentPage }: SidebarProps) {
	const handleItemClick = (link: string) => {
		setCurrentPage(link);
	};

	return (
		<div className='sidebar'>
			<div>
				{topIcon}
				<ul>
					{SidebarData.map((item, index) => {
						return (
							<li key={index}
								onClick={() => {
									handleItemClick(item.label);
								}}
								className={`sidebar-item ${currentPage === item.label ? 'active' : ''}`}
							>
								<div>
									<div>{item.icon}</div>
									<div>{item.title}</div>
								</div>
							</li>
						);
					})}
				</ul>
				{status}
			</div>
		</div>
	);
}

export default Sidebar;