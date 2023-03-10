import onChange from "on-change";
import { AppState } from "../../app.js";
import { View } from "../../common/view.js";

interface State {
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
    if (path === 'favorite') {
      console.log(`${path}`)
    }
  }

  render() {
    const container = document.createElement("div");
    container.innerHTML = `Count books: ${this.appState.favorite.length}`;
    this.app.innerHTML = "";
    this.app.append(container);
  }
}
