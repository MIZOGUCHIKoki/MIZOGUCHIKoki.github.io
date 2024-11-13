import React from 'react';
import PageTitle from '../Helpers/Helpers';

export default function Home(): JSX.Element {
    return (
        <div className='Contents'>
            {PageTitle()}
            <h1>全体的に開発中です．</h1>
            <a href='https://www.ugs.kochi-tech.ac.jp/250373b'><code>https://www.ugs.kochi-tech.ac.jp/250373b</code></a>
        </div>
    );
}