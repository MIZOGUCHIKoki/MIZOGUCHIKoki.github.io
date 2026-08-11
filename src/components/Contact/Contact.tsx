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
				<h2>Address</h2>
				<p>Letters and packages should be sent to:</p>
				<p>
					〒101-8430<br />
					東京都 千代田区 一ツ橋2丁目1-2 国立情報学研究所 (14F 大学院生室)
				</p>
				<p>
					National Institute of Informatics (14F Graduate Student Room)<br />
					2-1-2 Hitotsubashi, Chiyoda-ku, Tokyo 101-8430, Japan
				</p>
			</div>
		</div >
	)
}