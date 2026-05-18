import React from 'react';
import PageTitle from '../Helpers/Title';

export default function Home() {
	return (
		<div className='Contents'>
			{PageTitle()}
			<div>
				<h2>Welcome to my personal website!</h2>
				<p>
					This is a simple website to showcase my research and projects.
					Feel free to explore the different sections to learn more about
					my work.
				</p>
				<p>
					⚠️ This website has been building now for a while, and I will keep updating it with new content and projects.
				</p>
			</div>
		</div>
	)
}