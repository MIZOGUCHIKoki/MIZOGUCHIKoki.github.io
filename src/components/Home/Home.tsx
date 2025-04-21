import React from 'react';
import PageTitle from '../Helpers/Title';

export default function Home() {
	return (
		<div>
			{PageTitle()}
			<div
				style={{
					width: 'auto',
					padding: '10px',
					boxSizing: 'border-box',
				}}
			>
				<h2>Welcome to my personal website!</h2>
				<p>
					This is a simple website to showcase my research and projects.
					Feel free to explore the different sections to learn more about
					my work.
				</p>
			</div>
		</div>
	)
}