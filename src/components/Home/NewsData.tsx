import React from 'react';
export type NewsDataItem = {
	title: string;
	content: string | React.ReactNode;
	date: Date;
	keywords: string[];
	url?: string;
	image?: string;
	element?: React.ReactNode;

}
export const NewsData: NewsDataItem[] = [
	{
		title: 'IEEE COMPSAC 2026 へ参加してきました',
		date: new Date('2026-07-22T17:00:00'),
		content: (<>
			<p>たくさんの研究者の方々と交流できて非常に有意義な時間を過ごすことができました．</p>
			<ul>
				<li>場所: UPM: Higher Technical School of Civil Engineers, Madrid, Spain</li>
				<li>発表日: 2026年7月10日(金)</li>
				<li>発表タイトル: Lightweight and Stateless PUF-based Authentication Key Exchange Protocol for IoT Devices</li>
			</ul>
		</>),
		element: (
			<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7483371738018430976?collapsed=1"
				height="620" width="504" title="埋め込まれた投稿">
			</iframe>
		),
		keywords: ['研究', '国際会議', '口頭発表']
	},
	{
		title: 'Webサイトをリニューアルしました',
		date: new Date('2025-05-18T18:00:00'),
		content: 'このサイトをリニューアルしました．頑張りました．',
		keywords: ['Webサイト', 'リニューアル']
	},
	{
		title: 'IEEE COMPSAC 2026 CDS Workshopに採択されました',
		date: new Date('2025-05-11'),
		content: 'IEEE COMPSAC 2026 CDS Workshopに採択されました． 大変光栄です．7月頭にスペインのマドリードで開催される予定です．',
		keywords: ['研究', '国際会議', '採択',],
		url: 'https://ieeecompsac.computer.org/2026/cds/'
	}
];
