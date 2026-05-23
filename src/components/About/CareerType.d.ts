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

export type CertificateDataItem = {
    title: string;
    date: Date;
    exp_date?: Date;
    issuer: string;
    description?: string;
    reference?: {
        href: string;
        text: string;
    }[];
}