import { SentArticle } from './SentArticle';
export interface EmailedArticle extends SentArticle{
    email_count: number;
}