import { Book } from "./data.interface";

export interface AppState {
    favorites: Book[];
  }
  

export interface State {
    list: Book[];
    loading: boolean;
    searchQuery: string | undefined;
    offset: number;
    numFound: string,
  }
  