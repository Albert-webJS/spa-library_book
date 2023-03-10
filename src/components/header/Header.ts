import { AppState } from "../../app";
import { WrapperComponent } from "../../common";
import './Header.css';

export class Header extends WrapperComponent {
    public appState: AppState;
    constructor(appState: AppState) {
        super();
        this.appState = appState;
    }

    private template(): string {
        return `
            <img class="header-logo logo" src="/static/icons/logo.svg" alt="main logo"/>
            <nav class="header-menu menu">
              <a class="menu-link link" href="#">
                <img src="/static/icons/search-icon.svg" alt="search icon" />
                Search books
              </a>
              <a class="menu-link link" href="favorites">
                <img src="/static/icons/favorite-icon.svg" alt="favorite icon" />
                Favorites
                <div class="menu-amount-selected">
                  ${this.appState.favorites.length}
                </div>
              </a>
            </nav> 
        `
    }

    render(): HTMLElement {
        this.wrapper.innerHTML = '';
        this.wrapper.classList.add('header');
        this.wrapper.innerHTML = this.template();
        return this.wrapper
    }
}