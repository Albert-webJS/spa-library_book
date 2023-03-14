import onChange from "on-change";
import { AppState } from "src/app";
import { View } from "src/common";
import { Header } from 'src/components'
import { Search } from "src/components/search/Search";

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
    this.setTitle("book search");
  }

  updateState(path: string) {
    if (path === 'favorites') {
      console.log(`${path}`)
    }
  }

  render() {
    const main = document.createElement("div");
    main.innerHTML = ``;
    main.append(new Search(this.state).render())
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader(): void {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
