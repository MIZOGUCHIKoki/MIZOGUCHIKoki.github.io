import React from 'react';
import PageTitle from '../Helpers/Title';

import Career from './Career';

import './About.css';

export default function About() {
    return (
        <div className='Contents'>
            {PageTitle()}
            <Career />
        </div >
    );
}