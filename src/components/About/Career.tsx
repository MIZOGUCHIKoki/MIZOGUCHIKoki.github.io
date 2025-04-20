import React from 'react';
import { useEffect, useState } from 'react';
import { CareerData, CareerData2 } from './CareerData';
import { CareerDataItem } from './CareerType';
import isBeforeToday from '../Helpers/IsBeforeToday';

export default function Career() {
    return (
        <div>
            <h2>Biography</h2>
            <ul className='timeline'>
                {CareerData.map((value: CareerDataItem, key: number) => (
                    CarrerCard(value, key)
                ))}
            </ul>
            <h2>Research and Jobs</h2>
            <ul className='timeline'>
                {CareerData2.map((value: CareerDataItem, key: number) => (
                    CarrerCard(value, key)
                ))}
            </ul>
            <h2>Licenses</h2>
            <ul className='timeline'>
                <li>
                    <div className='timeline-date'>
                        <div>2025/3/18</div>
                    </div>
                    <div className='timeline-content'>
                        <span className='title'>教員免許</span>
                        <div>
                            <span>高等学校教諭一種免許状</span>
                            <span>（数学・情報）</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div >
    );
}

function useIsDesktop(breakpoint: number = 750): Boolean {
    const [isDesktop, setIsDesktop] = useState<Boolean>(window.innerWidth > breakpoint);
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > breakpoint);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [breakpoint]);
    return isDesktop;
}

function CarrerCard(value: CareerDataItem, key: number) {
    const isDesktop = useIsDesktop();
    return (
        <li key={`Carrer_${key}`}>
            <div className='timeline-date'>
                <div>
                    {value.date_start.getFullYear()}/
                    {value.date_start.getMonth() + 1}/
                    {value.date_start.getDate()}
                </div>
                <div
                    style={{
                        margin: isDesktop ? '5px 0' : '0 5px',
                    }}
                >
                    {value.date_end ? (isDesktop ? '|' : '-') : ''}
                </div>
                <div>
                    {
                        value.date_end && isBeforeToday(value.date_end)
                            ? `${value.date_end.getFullYear()}/${value.date_end.getMonth() + 1}/${value.date_end.getDate()}`
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
                <span
                    className='title'
                >{value.title}</span>
                <div>
                    {
                        value.title !== value.institution
                            ? (<span>{value.institution}</span>)
                            : null
                    }
                    {
                        value.role !== null && value.role !== value.title
                            ? (<span>({value.role})</span>)
                            : null
                    }
                </div>
            </div>
        </li >
    );
}