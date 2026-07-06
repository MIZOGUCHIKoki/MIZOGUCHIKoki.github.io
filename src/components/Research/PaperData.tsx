import { PaperDataItem } from './PaperType';

export const PaperData: PaperDataItem[] = [
    {
        type: '国際会議',
        title: 'Lightweight and Stateless PUF-based Authentication Key Exchange Protocol for IoT Devices',
        author: 'K. Mizoguchi (SOKENDAI), R.R. Pahlevi (Nagoya Univ.), H. Shimada (Nagoya Univ.), H. Hasegawa (NII), H. Takakura (NII)',
        journal: 'Proceedings of 2026 IEEE 50th Annual Computers, Software, and Applications Conference (COMPSAC)',
        page: '2430-2435',
        tag: '筆頭著者,査読有,口頭発表',
        url: '',
        year: 2026,
        location: 'Madrid, Spain',
        doi: '10.1109/COMPSAC69091.2026.00362',
        keywords: ['Internet of Things', 'Physical Unclonable Functions', 'Authentication and Key Exchange', 'Lightweight Protocols'],
    }, {
        type: '国際会議',
        title: 'Temporary Identification Management System using UNIX Time for IoT Device Privacy Protection',
        author: 'K. Mizoguchi (SOKENDAI), S. Fugkeaw (SIIT), M. Kumazaki (NII), H. Hasegawa (NII), H. Takakura (NII)',
        journal: 'Proceedings of the Tenth International Conference on Cyber-Technologies and Cyber-Systems (CYBER 2025)',
        page: '37–42',
        tag: '筆頭著者,査読有,口頭発表,Best Paper Award:https://www.iaria.org/conferences2025/AwardsCYBER25.html',
        url: 'https://personales.upv.es/thinkmind/dl/conferences/cyber/cyber_2025/cyber_2025_1_70_80093.pdf',
        year: 2025,
        location: 'Lisbon, Portugal',
        keywords: ['IoT', 'Device Identifier', 'Privacy', 'ID anonymization', 'UNIX time'],
    },
    {
        type: '国内研究会',
        title: 'A PUF-based Lightweight Authentication and Key Exchange Protocol for IoT with Privacy Protection and Concealed CRP',
        author: 'K. Mizoguchi (SOKENDAI), S. Fugkeaw (SIIT), A. Shimizu (KUT), M. Kumazaki (NII), H. Hasegawa (NII), H. Takakura (NII)',
        journal: 'IEICE Technical Report',
        vol: 125,
        no: 99,
        docs: 'ISEC2025-63',
        page: '312-319',
        tag: '筆頭著者,口頭発表',
        year: 2025,
        url: 'https://ken.ieice.org/ken/paper/20250709NclD/',
        location: '札幌, 日本',
        keywords: ['Authentication', 'Key Exchange', 'PUF', 'IoT', 'Privacy Protection', 'Concealed CRP'],
    },
    {
        type: '国内研究会',
        title: 'IoT環境に適したワンタイムパスワード認証方式',
        author: '溝口 洸熙 (KUT), 清水 明宏 (KUT)',
        journal: '電子情報通信学会 信学技報',
        vol: 124,
        no: 257,
        docs: 'LOIS2024-43',
        page: '112-117',
        tag: '筆頭著者,口頭発表',
        year: 2024,
        url: 'https://ken.ieice.org/ken/paper/20241115Qc50/',
        location: '福岡, 日本',
        keywords: ['認証技術', 'ワンタイムパスワード認証', '鍵交換', 'IoT'],
    }
]


/*
    title: string;
    author: string;
    journal: string;
    vol: number;
    no: string;
    docs: string;
    page: string;
    date: string;
    year: number;
    type: string;
    doi: string;
    url: string;
*/