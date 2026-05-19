import React from 'react';
import { CareerData, CareerData2 } from './CareerData';
import { CareerDataItem } from './CareerType';
import isBeforeToday from '../Helpers/IsBeforeToday';
import formatYearMonth from '../Helpers/FormatYearMonth';
export default function Career() {
    const sortCurrentFirst = (arr: CareerDataItem[]) => arr.slice().sort((a, b) => {
        const aCurrent = Boolean(a.date_end && !isBeforeToday(a.date_end));
        const bCurrent = Boolean(b.date_end && !isBeforeToday(b.date_end));
        if (aCurrent && !bCurrent) return -1;
        if (!aCurrent && bCurrent) return 1;
        return +new Date(b.date_start) - +new Date(a.date_start);
    });
    return (
        <div>
            <h2>Biography</h2>
            <ul className='timeline'>
                {sortCurrentFirst(CareerData).map((value: CareerDataItem, key: number) => (
                    CarrerCard(value, key)
                ))}
            </ul>
            <h2>Jobs</h2>
            <ul className='timeline'>
                {sortCurrentFirst(CareerData2).map((value: CareerDataItem, key: number) => (
                    CarrerCard(value, key)
                ))}
            </ul>
            <h2>Licenses</h2>
            <ul className='timeline'>
                <li>
                    <div className='timeline-date'>
                        <div>{formatYearMonth(new Date('2025-03-18'))}</div>
                    </div>
                    <div className='timeline-content'>
                        <span className='title'>教員免許</span>
                        <div>
                            <span style={{ marginRight: '5px' }}>高等学校教諭一種免許状</span>
                            <span>(数学・情報)</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div >
    );
}


function CarrerCard(value: CareerDataItem, key: number) {
    return (
        <li key={`Carrer_${key}`}>
            <div className='timeline-date'>
                <div>
                    {formatYearMonth(value.date_start)}
                </div>
                <div>
                    {value.date_end ? '--' : ''}
                </div>
                <div>
                    {
                        value.date_end && isBeforeToday(value.date_end)
                            ? formatYearMonth(value.date_end)
                            : ''
                    }
                    {
                        value.date_end && !isBeforeToday(value.date_end)
                            ? '現在'
                            : ''
                    }
                </div>
            </div>
            <div className='timeline-content'>
                <div className='title'>
                    <span style={{ marginRight: '5px' }}>{value.title}</span>
                    {value.location && (
                        <span style={{ fontSize: '0.9em' }}>({value.location})</span>
                    )}
                </div>
                <div style={{ marginTop: '5px' }}>
                    {value.department && (
                        <span style={{ marginRight: '5px' }}>{value.department}</span>
                    )}
                    {value.employment_type && value.employment_type !== value.title && (
                        <span>({value.employment_type})</span>
                    )}
                </div>
            </div>
        </li >
    );
}