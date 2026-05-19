export type PaperDataItem = {
    title: string;
    author: string;
    juranl: string;
    vol?: number;
    no?: number;
    docs?: string;
    page?: string;
    year?: number;
    tag?: string;
    doi?: string;
    url?: string;
    keywords?: string[];
}

export type PresentationDataItem = {
    title: string;
    presenter: string;
    conference: string;
    date: string;
    place: string;
    tag: string;
    url?: string;
}