import React, { useState, useEffect } from 'react';
import './timer.css';

export default function Timer(): JSX.Element {
    const [min, setMin] = useState<number>(0);
    const [sec, setSec] = useState<number>(0);
    const [isFocus, setIsFocus] = useState<boolean>(true);
    const getTime = () => {
        const dateTime = new Date();
        const min = (60 - dateTime.getMinutes()) % 30;
        if (min < 5) { // Break
            setIsFocus(false);
            setMin(30 - min);
        } else { // Focus
            setIsFocus(true);
            setMin(min - 5);
        }
        const sec = (60 - dateTime.getSeconds()) % 60;
        setSec(sec);
    }
    setTimeout(getTime, 1000);
    const backgroundColor = () => {
        if (!isFocus) {
            return '#004400'; // Green break
        }
        return '#2d445d'; // Blue focus
    }
    return (
        <div>
            <div
                style={{
                    display: 'block',
                    width: '100vw',
                    height: '100dvh',
                    backgroundColor: `${backgroundColor()}`,
                }}
            >
                <div
                    style={{
                        textAlign: 'left',
                        boxSizing: 'border-box',
                        padding: '10px',
                        height: '10vh',
                    }}
                >
                    <h1
                        style={{
                            color: 'white',
                            padding: 'initial',

                        }}
                    > 25 min-5 min Cycle Timer</h1>
                </div>
                <div
                    style={{
                        width: 'auto',
                        height: '90vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'block',
                            textAlign: 'center',
                        }}
                    >
                        <div>
                            <span
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: '7rem',
                                    margin: '0px 10px',
                                    padding: 'initial',
                                    color: 'white',
                                }}>
                                {!isFocus ?
                                    'BREAK TIME' :
                                    'FOCUS TIME'}
                            </span>
                        </div>

                        <div>
                            <span
                                style={{
                                    color: 'white',
                                    fontFamily: 'monospace',
                                    fontSize: '10rem',
                                    margin: '0px 10px',
                                    padding: 'initial',
                                }}
                            >
                                {min < 10 ? '0' : ''}
                                {min}
                                :
                                {sec < 10 ? '0' : ''}
                                {sec % 60}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};