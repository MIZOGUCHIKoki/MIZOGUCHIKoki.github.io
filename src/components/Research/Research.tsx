import React from 'react';
import PageTitle from '../Helpers/Helpers';
import './Research.css';

import { PaperData } from './PaperData';
import { PaperDataItem } from './PaperType';

export default function Research(): JSX.Element {
    return (
        <div className='Contents'>
            {PageTitle()}
            <h2>Paper</h2>
            <ul className='Paper'>
                {PaperData.map((value: PaperDataItem, key: number) => (
                    PaperCard(value, key)
                ))}
            </ul>
            <h2>Presentation and Poster</h2>
        </div>
    );
}

function PaperCard(value: PaperDataItem, key: number): JSX.Element {
    return (
        <li key={key}>
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