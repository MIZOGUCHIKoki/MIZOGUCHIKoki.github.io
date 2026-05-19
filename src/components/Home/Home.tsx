import React, { ReactNode } from 'react';

import '../Helpers/CardList.css';
import './Home.css';
import { NewsData } from './NewsData';
import { NewsDataItem } from './NewsData';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
			<div style={{ width: '90%', margin: '0 auto' }}>
				<p>
					みなさん．こんにちは．
					このサイトは，私の個人サイトです．
					このサイトでは，私の研究内容や，私が興味を持っていることなどを紹介していきます．
					また，私の研究内容についての論文や，私が参加したイベントなども紹介していきます．
					このサイトを通じて，私の研究内容や，私が興味を持っていることなどを知っていただければ幸いです．
					どうぞよろしくお願いいたします．
				</p>
			</div>
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