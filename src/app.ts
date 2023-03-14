import { MainView } from "src/views";

export interface AppState {
  favorites: string[];
}

class App {
  appState: AppState = {
    favorites: [],
  }
  private currentView: MainView;
  private routes = [{ path: "", view: MainView }];
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
