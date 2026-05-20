import React from 'react';
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
                {PaperData.map((value: PaperDataItem, key: number) => (
                    ResearchCard(value, key)
                ))}
            </ul>
            <h2>Oral Presentation and Poster</h2>
            <ul className='Card-list'>
                {PresentationData.map((value: PresentationDataItem, key: number) => (
                    PresentationCard(value, key)
                ))}
            </ul>
        </div >
    );
}

function ResearchCard(value: PaperDataItem, key: number) {
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
                        const colonIndex: number = trimmedTag.indexOf(':'); // Check if there is a colon in the tag (-1: no colon, >=0: colon exists)
                        const hasUrl: boolean = colonIndex > 0 && /^https?:\/\//.test(trimmedTag.slice(colonIndex + 1));

                        if (hasUrl) {
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
                                        e.stopPropagation(); // Prevent the click event from propagating to the parent li element
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
        </li >
    );
}

function PresentationCard(value: PresentationDataItem, key: number) {
    const hasUrl = Boolean(value.url && value.url.trim() !== '');

    return (
        <li
            key={`Presentation_${key}`}
            className={hasUrl ? 'is-clickable' : 'is-static'}
            onClick={hasUrl ? () => {
                window.open(value.url, '_blank', 'noopener,noreferrer');
            } : undefined}
        >
            <div className='Card-content'>
                <div className='title'>{value.title}
                    {value.url && value.url.trim() !== '' ? (
                        <OpenInNewIcon style={{ fontSize: '0.8em', verticalAlign: 'middle', marginLeft: '4px' }} />
                    ) : null}
                </div>
                <hr className='separator1'></hr>
                <div className='author'>{value.presenter}. </div>
                <hr className='separator2'></hr>
                <div>
                    <span>{value.conference}, </span><br />
                    <span>{value.place}. </span>
                </div>
            </div>
        </li>
    );
}
