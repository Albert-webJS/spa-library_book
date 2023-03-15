export interface ResponseData {
    docs: Array<any>;
    numFound: string;
    numFoundExact: boolean;
    num_found: number;
    offset: number;
    q: string;
    start: number;
}