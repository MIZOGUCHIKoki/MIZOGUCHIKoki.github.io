import React from 'react';
import PageTitle from '../Helpers/Title';
import './Research.css';

import { PaperData } from './PaperData';
import { PaperDataItem } from './PaperType';

import { PresentationData } from './PresentationData';
import { PresentationDataItem } from './PaperType';

export default function Research() {
    return (
        <div
            style={{
                width: 'auto',
            }}
        >
            {PageTitle()}
            <h2>Paper</h2>
            <ul className='Paper'>
                {PaperData.map((value: PaperDataItem, key: number) => (
                    PaperCard(value, key)
                ))}
            </ul>
            <h2>Presentation and Poster</h2>
            <ul className='Paper'>
                {PresentationData.map((value: PresentationDataItem, key: number) => (
                    PresentationCard(value, key)
                ))}
            </ul>
        </div>
    );
}

function PaperCard(value: PaperDataItem, key: number) {
    return (
        <li key={`Paper_${key}`} >
            <div className='Paper-prop'>
                <div className='date'>{value.date}</div>
                <div className='type'>
                    <span>{value.type}</span>
                </div>
            </div>
            <div className='Paper-content'>
                <div className='title'>{value.title}</div>
                <span className='author'>{value.author}. </span>
                <span>{value.juranl}, </span>
                <span>Vol.{value.vol}, no.{value.no}, </span>
                <span>{value.docs}, </span>
                <span>pp.{value.page}, </span>
                <span>{value.year}. </span>
            </div>
        </li >
    );
}

function PresentationCard(value: PresentationDataItem, key: number) {
    return (
        <li key={`Presentation_${key}`}>
            <div className='Paper-prop'>
                <div className='date'>{value.date}</div>
                <div className='type'>
                    <span>{value.type}</span>
                </div>
            </div>
            <div className='Paper-content'>
                <div>{value.title}</div>
                <span >{value.presenter}. </span>
                <span>{value.conference}, </span><br />
                <span>{value.place}, </span>
                <span>{value.year}. </span>
            </div>
        </li>
    );
}
