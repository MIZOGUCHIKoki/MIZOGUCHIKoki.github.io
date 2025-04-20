import { CareerDataItem } from './CareerType';

export const CareerData: CareerDataItem[] = [
    {
        title: '熊本県熊本市生まれ',
        date_start: new Date('2002-05-01'),
        date_end: null,
        institution: null,
        role: null,
        url: null
    },
    {
        title: '熊本県立玉名高等学校附属中学校',
        date_start: new Date('2015-04-01'),
        date_end: new Date('2018-03-31'),
        institution: '熊本県立玉名高等学校附属中学校',
        role: null,
        url: null
    },
    {
        title: '熊本県立玉名高等学校',
        date_start: new Date('2018-04-01'),
        date_end: new Date('2021-03-31'),
        institution: '熊本県立玉名高等学校',
        role: null,
        url: null
    },
    {
        title: '高知工科大学 情報学群',
        date_start: new Date('2021-04-01'),
        date_end: new Date('2025-03-31'),
        institution: '高知工科大学 情報学群',
        role: null,
        url: null
    },
    {
        title: '総合研究大学院大学 先端学術院 情報学コース',
        date_start: new Date('2025-04-01'),
        date_end: new Date('2030-03-31'),
        institution: '総合研究大学院大学 先端学術院 情報学コース',
        role: '博士一貫課程',
        url: 'https://www.soken.ac.jp/'
    }
]

export const CareerData2: CareerDataItem[] = [
    {
        title: 'Web service contributor',
        date_start: new Date('2022-09-01'),
        date_end: new Date('2030-03-31'),
        institution: 'Cloud LaTeX',
        role: 'Operation Team',
        url: 'https://cloudlatex.io/'
    },
    {
        title: 'Short-Term Internship Programm 2023',
        date_start: new Date('2024-04-01'),
        date_end: new Date('2024-04-30'),
        institution: 'Sirindhorn International Institute of Technology (SIIT), Thammasat University',
        role: 'Scholarship student',
        url: 'https://www.siit.tu.ac.th/'
    },
    {
        title: 'Research Assistant',
        date_start: new Date('2025-05-01'),
        date_end: new Date('2030-03-31'),
        institution: '国立情報学研究所',
        role: 'Research Assistant',
        url: 'https://www.nii.ac.jp/'
    }
]

// export type CareerDataItem = {
//     title: React.ReactNode;
//     date_start: Date;
//     date_end: Date;
//     institution: React.ReactNode;
//     role: React.ReactNode;
//     url: React.ReactNode;
// }
