import { AppState, State } from 'src/interfaces/index';
import { WrapperComponent } from 'src/common/wrapper-component';
import { Card } from '../Card/Card';
import './CardList.css';

export class CardList extends WrapperComponent {
    appState: AppState;
    parentState: State;
    constructor(appState: AppState, parentState: State) {
        super('div');
        this.appState = appState;
        this.parentState = parentState;
    }

    private template(): string {
        return `
                <h1 class="card-title">Books found: ${this.parentState.numFound}</h1>
        `;
    }

    private renderCard(): void {
        this.parentState.list.forEach(card => {
            this.wrapper.append(new Card(this.appState, card).render())
        })
    }

    public render(): HTMLElement {
        if (this.parentState.loading) {
            this.wrapper.innerHTML = `
                    <img class="card-loading" src="/static/icons/loading.gif" alt="loading status"/>
            `
            return this.wrapper
        }
        this.wrapper.classList.add('card-list');
        this.wrapper.innerHTML = this.template();
        this.renderCard();
        return this.wrapper
    }
}