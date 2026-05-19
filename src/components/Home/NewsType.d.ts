import React from 'react';


export type PaperDataItem = {
	title: string;
	content: string;
	date: Date;
	keywords: string[];
	url?: string;
}