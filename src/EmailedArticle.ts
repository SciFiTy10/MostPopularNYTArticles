import { Media } from './Media';
export interface EmailedArticle {
    url: string;
    adx_keywords: string;
    subsection: string;
    email_count: number;
    count_type: string;
    column: string;
    eta_id: number;
    section: string;
    id: number;
    asset_id: number;
    nytdsection: string;
    byline: string;
    type: string;
    title: string;
    abstract: string;
    published_data: string;
    source: string;
    updated: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    media: Media[];
    uri: string;
  }