import PageTitle from '../Helpers/Title';

import './Research.css';
import '../Helpers/CardList.css';
import { PaperData } from './PaperData';
import { PaperDataItem } from './PaperType';

import { PresentationData } from './PresentationData';
import { PresentationDataItem } from './PaperType';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Activity() {
    return (
        <div className='Contents'>
            {PageTitle()}
            <h2>Publications</h2>
            <ul className='Card-list'>
                {PaperData.map((value: PaperDataItem, index: number) => (
                    <ResearchCard key={`paper_${index}`} value={value} />
                ))}
            </ul>

            <h2>Presentations</h2>
            <ul className='Card-list'>
                {[...PresentationData]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((value: PresentationDataItem, index: number) => (
                        <PresentationCard key={`presentation_${index}`} value={value} />
                    ))}
            </ul>
        </div>
    );
}

function ResearchCard({ value }: { value: PaperDataItem }) {
    const hasUrl = Boolean(value.url && value.url.trim() !== '');

    return (
        <li
            className={hasUrl ? 'is-clickable' : 'is-static'}
            onClick={hasUrl ? () => {
                window.open(value.url, '_blank', 'noopener,noreferrer');
            } : undefined}
        >
            <div className='Card-content'>
                <div className='title'>
                    {value.title}
                    {value.url && value.url.trim() !== '' ? (
                        <OpenInNewIcon style={{ fontSize: '0.8em', verticalAlign: 'middle', marginLeft: '4px' }} />
                    ) : null}
                </div>
                <hr className='separator1'></hr>
                <div className='author'>{value.author}. </div>
                <div>
                    <span style={{ fontStyle: 'italic' }}>{value.juranl ? `${value.juranl}, ` : ''}</span>
                    <span>{value.vol !== undefined ? `Vol.${value.vol}, ` : ''}</span>
                    <span>{value.no !== undefined ? `no.${value.no}, ` : ''}</span>
                    <span>{value.docs ? `${value.docs}, ` : ''}</span>
                    <span>{value.page ? `pp.${value.page}, ` : ''}</span>
                    <span>{value.year !== undefined ? `${value.year}. ` : ''}</span>
                </div>
                <hr className='separator2'></hr>
                {value.keywords ? (
                    <div style={{ marginTop: '5px' }}>
                        <span style={{ fontWeight: 'bold' }}> Keywords: </span>
                        {value.keywords.map((keyword, index) => (
                            <span key={`keyword_${index}`} className='keyword'>{keyword}</span>
                        ))}
                    </div>
                ) : null}
                <div style={{ marginTop: '5px', textAlign: 'right' }}>
                    {value.tag ? value.tag.split(',').map((tag, index) => {
                        const trimmedTag: string = tag.trim();
                        const colonIndex: number = trimmedTag.indexOf(':');
                        const hasTagUrl: boolean = colonIndex > 0 && /^https?:\/\//.test(trimmedTag.slice(colonIndex + 1));

                        if (hasTagUrl) {
                            const label: string = trimmedTag.slice(0, colonIndex).trim();
                            const url: string = trimmedTag.slice(colonIndex + 1).trim();

                            return (
                                <a
                                    key={`tag_${index}`}
                                    className='tag tag-link'
                                    href={url}
                                    target='_blank'
                                    rel='noreferrer'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    {label} <OpenInNewIcon style={{ fontSize: '0.8em', verticalAlign: 'middle' }} />
                                </a>
                            );
                        }
                        return (
                            <span key={`tag_${index}`} className='tag'>{trimmedTag}</span>
                        );
                    }) : ''}
                </div>
            </div>
        </li>
    );
}

function PresentationCard({ value }: { value: PresentationDataItem }) {
    const hasUrl = Boolean(value.url && value.url.trim() !== '');

    return (
        <li
            className={hasUrl ? 'is-clickable' : 'is-static'}
            onClick={hasUrl ? () => {
                window.open(value.url, '_blank', 'noopener,noreferrer');
            } : undefined}
        >
            <div className='Card-content'>
                {value.date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
                <div className='title'>{value.title}
                    {value.url && value.url.trim() !== '' ? (
                        <OpenInNewIcon style={{ fontSize: '0.8em', verticalAlign: 'middle', marginLeft: '4px' }} />
                    ) : null}
                </div>
                <hr className='separator1'></hr>
                <div className='author'>{value.presenter}. </div>
                <hr className='separator2'></hr>
                <div>
                    <span>{value.conference}, </span>
                    <span>{value.place}. </span>
                </div>
            </div>
        </li>
    );
}