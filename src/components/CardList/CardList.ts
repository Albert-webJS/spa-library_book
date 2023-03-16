import { AppState, State, Book } from 'src/interfaces/index';
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
                <div class="card-grid"></div>
        `;
    }

    private renderCard(cardGrid: Element): void {
        this.parentState.list.forEach((book: Book) => {
            cardGrid.append(new Card(this.appState, book).render())
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
        const cardGrid = this.wrapper.querySelector('.card-grid');
        this.renderCard(cardGrid)
        return this.wrapper
    }
}