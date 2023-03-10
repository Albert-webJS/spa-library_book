import { MainView } from "./views/main/main";

export interface AppState {
  favorite: string[];
}

class App {
  appState: AppState = {
    favorite: [],
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
