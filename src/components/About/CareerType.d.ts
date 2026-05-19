import React from 'react';
// Ensure React types are available
// import { JSX } from 'react';

export type CareerDataItem = {
    title: React.ReactNode;
    date_start: Date;
    date_end: Date | null;
    location?: React.ReactNode;
    employment_type?: React.ReactNode;
    department?: React.ReactNode;
    url?: React.ReactNode;
    description?: React.ReactNode;
}

