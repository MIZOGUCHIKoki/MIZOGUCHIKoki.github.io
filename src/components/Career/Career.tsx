import React from 'react';
import { CareerData } from './CareerData';
import { CareerDataItem } from './DataType';
import './Career.css';
import PageTitle from '../Helpers/Helpers';

export default function Sidebar(): JSX.Element {
    return (
        <div className='Contents'>
            {PageTitle()}
            <ul className='timeline'>
                {CareerData.map((value: CareerDataItem, key: number) => (
                    CarrerCard(value, key)
                ))}
            </ul>
        </div >
    );
}

function CarrerCard(value: CareerDataItem, key: number): JSX.Element {
    return (
        <li>
            <p className='timeline-date'>
                {value.date}
            </p>
            <div className='timeline-content'>
                <h3>{value.title}</h3>
            </div>
        </li>
    );
}