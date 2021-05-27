import { Media } from './Media';
export interface Article{
    url: string;
    adx_keywords: string;
    column: string;
    section: string;
    id: number;
    asset_id: number;
    byline: string;
    type: string;
    title: string;
    abstract: string;
    published_date: string;
    source: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    media: Media[];
    uri: string;
}