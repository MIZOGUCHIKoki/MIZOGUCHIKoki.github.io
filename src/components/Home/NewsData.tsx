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
		title: '我孫子吹奏楽団の「真夏のコンサート2026」に出演しました',
		date: new Date('2026-08-10T16:41:00'),
		content: (
			<>
				千葉県我孫子市にて開催された，我孫子吹奏楽団による「真夏のコンサート2026」に出演しました．
				技術向上もさることながら，演奏の楽しさを改めて感じることができました．
				自分の課題も発見できた，素敵な演奏会でした．
			</>
		),
		element: (
			<iframe
				src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F0kmizo5%2Fposts%2Fpfbid0wfe5PYF8bn9C6v7D5NCZm2CaWm1FZGhsaChk9dc7afyGJ46knvE8gPpcYpksFhhTl&show_text=false"
				height="250"
				style={{ border: 0 }}
				title="Embedded post"
			></iframe >
		),
		keywords: ['楽団', '演奏会']
	},
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
				height="620"
				style={{ border: 0 }}
				title="Embedded post"
			></iframe>
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
