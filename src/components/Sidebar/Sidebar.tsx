import React from 'react';

import { SidebarData } from './SidebarData';

import './Sidebar.css';
import Icon from '../../images/fig.png';

function Sidebar() {

	return (
		<div style={{
			textAlign: 'center',
			height: '2000px',
			width: '250px',
			backgroundColor: 'var(--theme-color)',
		}}
			className='sidebar'>
			<div style={{
				position: 'sticky',
				top: '0px',
				alignItems: 'flex-start',
			}}>
				{topIcon}
				<ul style={{
					margin: '10px 0px',
					padding: '0px',
					height: '100%',
					width: '100%',
				}}>
					{SidebarData.map((item, index) => {
						return (
							<li key={index}
								onClick={() => {
									window.location.pathname = item.link;
								}}
								className={`sidebar-item${window.location.pathname === item.link ? ' active' : ''}`}
							>
								<div style={{
									display: 'flex',
									color: 'var(--text-color-onTheme)',
									fontSize: '1.2rem',
								}}>
									<div
										style={{
											marginRight: '10px',
										}}
									>{item.icon}</div>
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
	<div>
		<img
			src={Icon}
			alt="Icon"
			style={
				{
					width: '80%',
					height: 'auto',
					margin: '10px'
				}
			}
		/>
		<div>
			<p style={{
				fontSize: '1.5rem',
				margin: '0',
				textAlign: 'center',
				color: 'var(--text-color-onTheme)',
				fontWeight: '600'
			}}>溝口 洸熙</p>
			<code style={{
				fontSize: '1rem',
				margin: '0',
				textAlign: 'center',
				color: 'var(--text-color-onTheme)',
				fontWeight: '600'
			}}>MIZOGUCHI Koki</code>
		</div>
	</div>
);

export default Sidebar;