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
		title: 'KUT WINDBRASS 「オータムコンサート 2026」に出演しました',
		date: new Date('2026-10-20T16:00:00'),
		content: (<>
			高知県香美市にて開催された，KUT WINDBRASSによる「オータムコンサート 2026」に出演しました．
			大学1年生との年齢差を感じる会でした．
			楽しかったです．
		</>
		),
		element: (
			<img
				src="https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/795015371_1619006736327633_872027708072794307_n.jpg?stp=dst-jpg_tt6&cstp=mx1086x724&ctp=s1086x724&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Cf9lcUCcdDEQ7kNvwGVrD9N&_nc_oc=AdrcNm32TafWW2cu3eX4fpTZSYDFWyyQZUchCeguX53JOBiZXgq_Co2wY7AXAtxNZqTwXcB0SyTeEDtzgImPFjxL&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=SucagzDm9T13cME1urpAEQ&_nc_ss=7b2a8&oh=00_AQJLYv8md-YyvC96lt4gT3zz_RFrmp7OXkRDXY6hb3fjsA&oe=6AB7C5C9"
				width="400"
			>
			</img >
		),
		keywords: ['楽団', '演奏会']
	},
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
			<img
				src="https://scontent-nrt6-1.xx.fbcdn.net/v/t39.30808-6/768130155_1582317259996581_3117471638950228583_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_WjkhsMP4KQQ7kNvwHKt872&_nc_oc=AdrNJojQRzFk3nepxxJbpzk3iDLaAJNNBWk8KP8yYs_VdeTvWV2dUUAsqanKCAVDBmCRxJpVdSlfuugpSFPO1mbW&_nc_zt=23&_nc_ht=scontent-nrt6-1.xx&_nc_gid=Fpby5O0TP3FaMgyr34XyXw&_nc_ss=7b2a8&oh=00_AQJiDWGQdRuMiH94y-gULNo2VG7MXP_WltxcEDRDGU45FQ&oe=6AB7C8ED"
				width="400"
			>
			</img>
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
