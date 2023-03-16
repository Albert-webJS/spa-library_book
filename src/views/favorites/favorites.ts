import onChange from "on-change";
import { View } from "src/common/index";
import { Header, CardList } from 'src/components/index'
import { AppState } from "src/interfaces/index";


export class FavoritesView extends View {
  public appState: AppState;

  constructor(appState: AppState) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.updateState.bind(this))
    this.setTitle("favorites")
  }

  public destroy(): void {
    onChange.unsubscribe(this.appState);
  }

  private updateState(path: string) {
    if (path === 'favorites') {
      this.render();
    }
  }

  private renderHeader(): void {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }

  public render() {
    const main = document.createElement('section');
    main.innerHTML = `<h1 class="card-title">Favorites</h1>`
    main.append(
      new CardList(this.appState, { list: this.appState.favorites }).render())
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }
}
