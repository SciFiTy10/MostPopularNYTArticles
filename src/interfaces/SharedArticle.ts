import { SentArticle } from './SentArticle';

export interface SharedArticle extends SentArticle{
    share_count: number;
}