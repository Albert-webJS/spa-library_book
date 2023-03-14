import { AppState } from 'src/app';
import { WrapperComponent } from 'src/common/wrapper-component';
import { State } from 'src/views/index';
import './CardList.css';

export class CardList extends WrapperComponent {
    appState: AppState;
    parentState: State;
    constructor(appState: AppState, parentState: State) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    private template(): string {
        return `
            <div class="card-box">
                <h1>Books found: ${this.parentState.list.length}</h1>
            </div>
        `;
    }

    public render(): HTMLElement {
        if (this.parentState.loading) {
            this.wrapper.innerHTML = `<div>Loading...</div>`
            return this.wrapper
        }
        this.wrapper.classList.add('card-list');
        this.wrapper.innerHTML = this.template();
        return this.wrapper
    }
}