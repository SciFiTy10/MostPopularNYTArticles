import { Article } from './Article';

export interface ViewedArticle extends Article{
    views: number;
}