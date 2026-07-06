export type PaperDataItem = {
    type: string;
    title: string;
    author: string;
    journal: string;
    vol?: number;
    no?: number;
    docs?: string;
    page?: string;
    year?: number;
    tag?: string;
    doi?: string;
    url?: string;
    location?: string;
    keywords?: string[];
}

export type PresentationDataItem = {
    title: string;
    presenter: string;
    conference: string;
    date: Date;
    endDate?: Date;
    place: string;
    tag: string;
    url?: string;
}