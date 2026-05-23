import { CareerDataItem } from './CareerType';
import { CertificateDataItem } from './CareerType';
export const CareerData: CareerDataItem[] = [
    {
        title: '熊本県熊本市生まれ',
        date_start: new Date('2002-05')
    },
    {
        title: '熊本県立玉名高等学校附属中学校',
        date_start: new Date('2015-04-01'),
        date_end: new Date('2018-03-31'),
        location: '熊本県,玉名市',
    },
    {
        title: '熊本県立玉名高等学校',
        date_start: new Date('2018-04-01'),
        date_end: new Date('2021-03-31'),
        department: '普通科',
        location: '熊本県,玉名市',
    },
    {
        title: '高知工科大学',
        date_start: new Date('2021-04-01'),
        date_end: new Date('2025-03-31'),
        location: '高知県,香美市',
        department: '情報学群',
    },
    {
        title: '総合研究大学院大学 先端学術院 情報学コース',
        date_start: new Date('2025-04-01'),
        date_end: new Date('2030-03-31'),
        location: '東京都,千代田区',
        department: '5年一貫博士 情報学コース',
        url: 'https://www.soken.ac.jp/'
    }
]

export const CareerData2: CareerDataItem[] = [
    {
        title: 'Cloud LaTeX',
        date_start: new Date('2022-09-01'),
        date_end: new Date('2030-03-31'),
        department: 'Operation Team',
        employment_type: 'Part-time'
    },
    {
        title: 'Sirindhorn International Institute of Technology (SIIT)',
        date_start: new Date('2024-04-01'),
        date_end: new Date('2024-04-30'),
        location: 'Pathum Thani,Thailand',
        department: 'Short-Term Internship Program 2023',
        employment_type: 'Internship'
    },
    {
        title: '東京都立南葛飾高等学校',
        date_start: new Date('2025-06-11'),
        date_end: new Date('2026-03-25'),
        location: '東京都,葛飾区',
        department: '数学科',
        employment_type: '非常勤講師',
    },
    {
        title: '千葉県立松戸南高等学校',
        date_start: new Date('2025-04-20'),
        date_end: new Date('2027-03-31'),
        location: '千葉県,松戸市',
        department: '情報科',
        employment_type: '非常勤講師',
    },
    {
        title: '国立情報学研究所',
        date_start: new Date('2025-05-01'),
        date_end: new Date('2030-03-31'),
        location: '東京都,千代田区',
        department: 'ストラテジックサイバーレジリエンス研究開発センター',
        employment_type: 'Research Assistant',
    }
]
export const CertificateData: CertificateDataItem[] = [
    {
        title: '高等学校教諭一種免許状 数学・情報',
        issuer: '高知県教育委員会',
        date: new Date('2025-03-18'),
    },
    {
        title: '感謝状',
        issuer: '高知県警察',
        date: new Date('2025-03-18'),
        description: '高知県警察のサイバーセキュリティ啓発活動への協力に対して授与されました．',
        reference: [{
            href: 'https://www.kochi-tech.ac.jp/news/2025/006649.html',
            text: '高知県警察本部より学生団体「Cykut」の卒業生へ感謝状が贈呈されました'
        }]
    }
]