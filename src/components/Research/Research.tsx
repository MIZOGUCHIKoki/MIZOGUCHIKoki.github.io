import React from 'react';
import PageTitle from '../Helpers/Title';

import './Research.css';

import { PaperData } from './PaperData';
import { PaperDataItem } from './PaperType';

import { PresentationData } from './PresentationData';
import { PresentationDataItem } from './PaperType';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Research() {
    return (
        <div className='Contents'>
            {PageTitle()}
            <h2>Publications</h2>
            <ul className='Paper'>
                {PaperData.map((value: PaperDataItem, key: number) => (
                    PaperCard(value, key)
                ))}
            </ul>
            <h2>Oral Presentation and Poster</h2>
            <ul className='Paper'>
                {PresentationData.map((value: PresentationDataItem, key: number) => (
                    PresentationCard(value, key)
                ))}
            </ul>
        </div >
    );
}

function PaperCard(value: PaperDataItem, key: number) {
    return (
        <li key={`Paper_${key}`} onClick={() => {
            if (value.url) {
                window.open(value.url, '_blank', 'noopener,noreferrer');
            }
        }}>
            <div className='Paper-content'>
                <div className='title'>
                    {value.title}
                    {value.url && value.url.trim() !== '' ? (
                        <OpenInNewIcon style={{ fontSize: '0.8em', verticalAlign: 'middle', marginLeft: '4px' }} />
                    ) : null}
                </div>
                <hr className='separator1'></hr>
                <div className='author'>{value.author}. </div>
                <hr className='separator2'></hr>
                <div>
                    <span>{value.juranl ? `${value.juranl}, ` : ''}</span>
                    <span>{value.vol !== undefined ? `Vol.${value.vol}, ` : ''}</span>
                    <span>{value.no !== undefined ? `no.${value.no}, ` : ''}</span>
                    <span>{value.docs ? `${value.docs}, ` : ''}</span>
                    <span>{value.page ? `pp.${value.page}, ` : ''}</span>
                    <span>{value.year !== undefined ? `${value.year}. ` : ''}</span>
                </div>
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
                                    className='tag'
                                    href={url}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {label} {<OpenInNewIcon style={{ fontSize: '0.8em', verticalAlign: 'middle' }} />}
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

function PresentationCard(value: PresentationDataItem, key: number) {
    return (
        <li key={`Presentation_${key}`} onClick={() => {
            if (value.url) {
                window.open(value.url, '_blank', 'noopener,noreferrer');
            }
        }}>
            <div className='Paper-content'>
                <div className='title'>{value.title}</div>
                <hr className='separator1'></hr>
                <div className='author'>{value.presenter}. </div>
                <hr className='separator2'></hr>
                <div>
                    <span>{value.conference}, </span><br />
                    <span>{value.place}, </span>
                </div>
            </div>
        </li>
    );
}
