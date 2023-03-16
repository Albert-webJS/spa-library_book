import { AppState, State, Book } from 'src/interfaces/index';
import { WrapperComponent } from 'src/common/wrapper-component';
import { Card } from '../Card/Card';
import './CardList.css';

type StateComponent = State | Record<string, Book[]>

export class CardList extends WrapperComponent {
    appState: AppState;
    parentState: StateComponent;
    constructor(appState: AppState, parentState: StateComponent) {
        super('div');
        this.appState = appState;
        this.parentState = parentState;
    }

    private template(): string {
        return `
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