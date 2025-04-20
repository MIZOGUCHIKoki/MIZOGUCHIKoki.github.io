import React from 'react';
// Ensure React types are available
// import { JSX } from 'react';

export type CareerDataItem = {
    title: React.ReactNode;
    date_start: Date;
    date_end: Date | null;
    institution: React.ReactNode;
    role: React.ReactNode;
    url: React.ReactNode;
}

