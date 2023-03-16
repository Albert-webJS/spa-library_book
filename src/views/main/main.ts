import onChange from "on-change";
import { View } from "src/common/index";
import { Header, Search, CardList } from 'src/components/index'
import { AppState, ResponseData, State } from "src/interfaces/index";

const initialState = {
  list: [],
  numFound: "0",
  loading: false,
  searchQuery: undefined,
  offset: 0
}

export class MainView extends View {
  public appState: AppState;
  public state: State = initialState

  constructor(appState: AppState) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.updateState.bind(this))
    this.state = onChange(this.state, this.update.bind(this))
    this.setTitle("book search")
  }

  private async loadList(q: string, offset: number): Promise<ResponseData> {
    const response = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
    return response.json()
  }

  public destroy(): void {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }

  private updateState(path: string) {
    if (path === 'favorites') {
      this.render();
    }
  }

  private async update(path: string) {
    if (path === 'searchQuery') {
      this.state.loading = true;
      const data = await this.loadList(this.state.searchQuery, this.state.offset);
      this.state.loading = false;
      this.state.numFound = data.numFound;
      this.state.list = data.docs;
    }
    if (path === 'list' || path === "loading") {
      this.render();
    }
  }

  private renderHeader(): void {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }

  public render() {
    const main = document.createElement('section');
    main.append(
      new Search(this.state).render(),
      new CardList(this.appState, this.state).render())
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }
}
