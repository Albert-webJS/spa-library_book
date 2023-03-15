export interface AppState {
    favorites: string[];
  }
  

export interface State {
    list: string[];
    loading: boolean;
    searchQuery: string | undefined;
    offset: number;
    numFound: 0,
  }
  