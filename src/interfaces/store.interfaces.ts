export interface AppState {
    favorites: string[];
  }
  

export interface State {
    list: Record<string, any>[];
    loading: boolean;
    searchQuery: string | undefined;
    offset: number;
    numFound: string,
  }
  