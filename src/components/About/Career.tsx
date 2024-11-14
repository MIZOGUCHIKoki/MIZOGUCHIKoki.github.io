import React from 'react';
import { CareerData } from './CareerData';
import { CareerDataItem } from './CareerType';


export default function Sidebar(): JSX.Element {
    return (
        <div className='Contents'>
            <h2>
                Career
            </h2>
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
        <li key={`Carrer_${key}`}>
            <div className='timeline-date'>
                <div>{value.date}</div>
            </div>
            <div className='timeline-content'>
                <span>{value.title}</span>
            </div>
        </li>
    );
}