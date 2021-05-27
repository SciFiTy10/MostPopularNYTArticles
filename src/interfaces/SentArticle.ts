import { Article } from './Article';

export interface SentArticle extends Article{
    subsection: string;
    count_type: string;
    eta_id: number;
    nytdsection: string;
    updated: string;
}