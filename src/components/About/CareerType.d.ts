import React from 'react';
// Ensure React types are available
// import { JSX } from 'react';

export type CareerDataItem = {
    title: string;
    date_start: Date;
    date_end?: Date;
    location?: string;
    employment_type?: string;
    department?: string;
    url?: string;
    description?: string;
}

