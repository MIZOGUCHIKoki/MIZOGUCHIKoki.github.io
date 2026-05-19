export type NewsDataItem = {
	title: string;
	content: string;
	date: Date;
	keywords: string[];
	url?: string;
	image?: string;
}
export const NewsData: NewsDataItem[] = [
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
