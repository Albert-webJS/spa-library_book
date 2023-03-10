import { AppState } from "../../app";
import { WrapperComponent } from "../../common";

import './Header.css';

export class Header extends WrapperComponent {
    public appState: AppState;
    constructor(appState: AppState) {
        super();
        this.appState = appState;
    }

    private useTemplate(): string {
        return `
            <div>
                <img class="header__logo logo" src="/static/icons/logo.svg" alt="main logo" />
            </div>
        `
    }

    render(): HTMLElement {
        this.wrapper.innerHTML = '';
        this.wrapper.classList.add('header');
        this.wrapper.innerHTML = this.useTemplate();
        return this.wrapper
    }
}