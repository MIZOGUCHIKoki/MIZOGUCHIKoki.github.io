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
            <h3>Research Activities</h3>
            <ul className='timeline'>
                <li>
                    <div className='timeline-date'>
                        <div>2024年4月</div>
                    </div>
                    <div className='timeline-content'>
                        <span>STIP 2023. Sirindhorn International Institute of Technology,<br /> Thammasat University, Thailand.</span>
                    </div>
                </li>
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