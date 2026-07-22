import React, { ReactNode } from 'react';

import '../Helpers/CardList.css';
import './Home.css';
import { NewsData } from './NewsData';
import { NewsDataItem } from './NewsData';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Reference } from '../Helpers/Reference';

type LinkItemData = {
	label: string;
	url: string;
	icon: ReactNode;
};

const linkItems: LinkItemData[] = [
	{
		label: 'GitHub',
		url: 'https://github.com/MIZOGUCHIKoki',
		icon: <GitHubIcon style={{ fontSize: '1.5em', verticalAlign: 'middle', marginRight: '8px' }} />
	},
	{
		label: 'ORCID',
		url: 'https://orcid.org/0009-0000-7902-2760',
		icon: <img src={require('../../images/orcid_logo.png')} alt='ORCID' style={{ width: '1.5em', height: '1.5em', verticalAlign: 'middle', marginRight: '8px' }} />
	},
	{
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/koki-mizoguchi-49568335b/',
		icon: <LinkedInIcon style={{ fontSize: '1.5em', verticalAlign: 'middle', marginRight: '8px' }} />
	},
	{
		label: '',
		url: 'https://zenn.dev/k_mizomizo',
		icon: <img src={require('../../images/zenn_logo.png')} alt='Zenn' style={{ height: '1.5em', verticalAlign: 'middle', marginRight: '8px' }} />
	}
];

const sortedNewsData = NewsData.slice().sort((a, b) => b.date.getTime() - a.date.getTime());

export default function Home() {
	return (
		<div className='Contents'>
			<h2>Welcome to my personal website!</h2>
			<div style={{ margin: '0 auto', textAlign: 'left' }}>
				<p>
					総合研究大学院大学（SOKENDAI）で5年一貫博士課程に所属しています．
					情報学コースです．
					普段は国立情報学研究所{Reference({ name: '高倉研究室', url: 'https://www.tkkr.nii.ac.jp/' })}にて研究を行っています．
				</p>
				<p>
					研究テーマは，厳しい制約下にあるIoT機器にも適用可能な，認証鍵交換方式，物理複製困難関数(PUF)，暗号プロトコルの安全性解析などです．
				</p>
			</div>
			<h2>

			</h2>
			<h2>Link</h2>
			<ul className='Link-list'>
				{linkItems.map((item) => (
					<LinkItemComponent key={item.label} item={item} />
				))}
			</ul>
			<h2>News</h2>
			<div>
				<ul className='Card-list'>
					{sortedNewsData.map((item, index) => (
						<NewsItem key={index} item={item} />
					))}
				</ul>
			</div>
		</div>
	)
}

function LinkItemComponent({ item }: { item: LinkItemData }) {
	return (
		<li onClick={() => {
			window.open(item.url, '_blank', 'noopener,noreferrer');
		}}>
			{item.icon}
			{item.label}
			<OpenInNewIcon style={{ fontSize: '1.5em', verticalAlign: 'middle', marginLeft: '4px' }} />
		</li>
	);
}

function NewsItem({ item }: { item: NewsDataItem }) {
	const hasUrl = Boolean(item.url && item.url.trim() !== '');

	return (
		<li
			className={hasUrl ? 'is-clickable' : 'is-static'}
			onClick={hasUrl ? () => {
				window.open(item.url, '_blank', 'noopener,noreferrer');
			} : undefined}
		>
			<div className='Card-content'>
				<div style={{ fontStyle: 'bold', marginBottom: '5px' }}>
					{item.date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
				</div>
				<div className='title'>
					{item.title}
					{item.url && item.url.trim() !== '' ? (
						<OpenInNewIcon style={{ fontSize: '0.8em', verticalAlign: 'middle', marginLeft: '4px' }} />
					) : null}
				</div>
				{item.image && (
					<div style={{ marginTop: '10px', textAlign: 'center' }}>
						<img src={item.image} alt={item.title} style={{ maxWidth: '80%' }} />
					</div>
				)}
				{item.element ? (
					<div style={{ marginTop: '10px', textAlign: 'center' }}>
						{item.element}
					</div>
				) : null}
				<hr className='separator1'></hr>
				<div className='NewsContent'>
					{item.content}
				</div>
				<div style={{ marginTop: '5px', textAlign: 'right' }}>
					{item.keywords.map((keyword, index) => (
						<span key={`keyword_${index}`} className='tag'>
							{keyword}
						</span>
					))}
				</div>
			</div>
		</li>
	)
}