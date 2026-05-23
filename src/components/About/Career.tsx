import React from 'react';
import { CareerData, CareerData2 } from './CareerData';
import { CareerDataItem } from './CareerType';
import { CertificateData } from './CareerData';
import { CertificateDataItem } from './CareerType';
import isBeforeToday from '../Helpers/IsBeforeToday';
import formatYearMonth from '../Helpers/FormatYearMonth';
import { Reference } from '../Helpers/Reference';

export default function Career() {
    const sortCurrentFirst = (arr: CareerDataItem[]) => arr.slice().sort((a, b) => {
        const aCurrent = Boolean(a.date_end && !isBeforeToday(a.date_end));
        const bCurrent = Boolean(b.date_end && !isBeforeToday(b.date_end));
        if (aCurrent && !bCurrent) return -1;
        if (!aCurrent && bCurrent) return 1;
        return +new Date(b.date_start) - +new Date(a.date_start);
    });
    const sortCurrentFirst_cer = (arr: CertificateDataItem[]) => arr.slice().sort((a, b) => {
        const aCurrent = Boolean(a.exp_date && !isBeforeToday(a.exp_date));
        const bCurrent = Boolean(b.exp_date && !isBeforeToday(b.exp_date));
        if (aCurrent && !bCurrent) return -1;
        if (!aCurrent && bCurrent) return 1;
        return +new Date(b.date) - +new Date(a.date);
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
            <h2>Certificates & Awards</h2>
            <ul className='timeline'>
                {sortCurrentFirst_cer(CertificateData).map((value: CertificateDataItem, key: number) => (
                    CertificateCard(value, key)
                ))}
            </ul>
        </div >
    );
}

function CertificateCard(value: CertificateDataItem, key: number) {
    return (
        <li key={`Certificate_${key}`}>
            <div className='timeline-date'>
                <div>
                    {formatYearMonth(value.date)}
                </div>
                <div>
                    {value.exp_date ? '--' : ''}
                </div>
                <div>
                    {
                        value.exp_date && isBeforeToday(value.exp_date)
                            ? formatYearMonth(value.exp_date)
                            : ''
                    }
                    {
                        value.exp_date && !isBeforeToday(value.exp_date)
                            ? '現在'
                            : ''
                    }
                </div>
            </div>
            <div className='timeline-content'>
                <div className='title'>
                    <span style={{ marginRight: '5px' }}>{value.title}</span>
                </div>
                <div style={{ marginTop: '5px' }}>
                    <span style={{ fontWeight: 'bold' }}>ISSUER:</span>
                    <span style={{ marginLeft: '5px' }}> {value.issuer} </span>
                </div>
                {value.reference && (
                    <div>
                        <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Reference:</span>
                        <ul style={{
                            marginLeft: '0px',
                            marginTop: '5px',
                            listStyleType: 'none',
                        }}>
                            {value.reference.map((ref, index) => (
                                <li key={`ref_${index}`}>
                                    <Reference name={ref.text} url={ref.href} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {value.description && (
                    <div>
                        <hr className='separator2'></hr>
                        <p style={{ marginTop: '10px' }}>{value.description}</p>
                    </div>
                )}
            </div>
        </li >
    )
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