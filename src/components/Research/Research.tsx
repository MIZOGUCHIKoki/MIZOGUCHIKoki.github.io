import React from 'react';
import PageTitle from '../Helpers/Title';

import './Research.css';

import { PaperData } from './PaperData';
import { PaperDataItem } from './PaperType';

import { PresentationData } from './PresentationData';
import { PresentationDataItem } from './PaperType';

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
        <li key={`Paper_${key}`}>
            <div className='Paper-content'>
                <div className='title'>{value.title}</div>
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
                    {value.tag ?
                        value.tag.split(',').map((tag, index) => (
                            <span key={`tag_${index}`} className='tag'>{tag.trim()}</span>
                        ))
                        : ''}
                </div>
            </div>
        </li>
    );
}

function PresentationCard(value: PresentationDataItem, key: number) {
    return (
        <li key={`Presentation_${key}`}>
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
