import React from 'react';

import PageTitle from '../Helpers/Title';

export default function Contact() {
	return (
		<div className='Contents'>
			{PageTitle()}
			<div>
				<h2>Contact Me</h2>
				<p>
					You can contact me via following e-mail address:
				</p>
				<p>
					<img src={require('../../images/e-mail_address.png')}
						alt='Email'
						style={{ verticalAlign: 'middle', width: 'auto', height: '1em' }} />
				</p>
			</div>
		</div >
	)
}