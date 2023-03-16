import { FavoritesView, MainView } from "src/views/index";
import { AppState } from "./interfaces/index";

type Pages = MainView | FavoritesView

class App {
  appState: AppState = {
    favorites: [],
  }
  private currentView: Pages;
  private routes = [
    { path: "", view: MainView },
    { path: "#favorites", view: FavoritesView },
  ];
  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find((route) => route.path === location.hash).view;
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
