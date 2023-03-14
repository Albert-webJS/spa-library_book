import onChange from "on-change";
import { AppState } from "src/app";
import { View } from "src/common";
import { Header, Search, CardList } from 'src/components/index'

export interface State {
  list: string[];
  loading: boolean;
  searchQuery: string | undefined;
  offset: number;
}

export class MainView extends View {
  public appState: AppState;
  state: State = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0
  }
  constructor(appState: AppState) {
    super();
    this.appState = appState
    this.appState = onChange(this.appState, this.updateState.bind(this))
    this.state = onChange(this.state, this.update.bind(this))
    this.setTitle("book search");
  }

  async loadList(q, offset): Promise<any> {
    const response = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
    return response.json()
  }

  updateState(path: string) {
    if (path === 'favorites') {
      console.log(path)
    }
  }

  async update(path: string) {
    if (path === 'searchQuery') {
      this.state.loading = true;
      const data = await this.loadList(this.state.searchQuery, this.state.offset);
      this.state.loading = false;
      this.state.list = data.docs;
    }
    if (path === 'list' || path === "loading") {
      this.render();
    }
  }

  render() {
    const main = document.createElement("div");
    main.append(new Search(this.state).render(), new CardList(this.appState, this.state).render())
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader(): void {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
