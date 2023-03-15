import { WrapperComponent } from 'src/common/wrapper-component';
import { AppState } from 'src/interfaces/index';
import './Card.css'

export class Card extends WrapperComponent {
    appState: AppState;
    cardState: any;
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    private template(): string {
        return `
            <div card-box-image>
                <img 
                    src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition.key}-M.jpg"
                    alt="book cover photo"
                />
            </div>
            <div class="card-content">
                <span class="card-tag">
                    ${this.cardState.subject ? `${this.cardState.subject[0]} & ${this.cardState.subject[1]}` : "is not set"}}
                </span>
                <span class"card-name"></span>
                <span class="card-author"></span>
            </div>
        `
    }

    render(): void {
        this.wrapper.classList.add('card');
        this.wrapper.innerHTML = ``;
    }
}