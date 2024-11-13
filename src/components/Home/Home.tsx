import React from 'react';
import PageTitle from '../Helpers/Helpers';

export default function Home(): JSX.Element {
    return (
        <div className='Contents'>
            {PageTitle()}
        </div>
    );
}