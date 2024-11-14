import React from 'react';
import PageTitle from '../Helpers/Helpers';

import Career from './Career';

import './About.css';

export default function About(): JSX.Element {
    return (
        <div className='Contents'>
            {PageTitle()}
            <Career />
        </div >
    );
}