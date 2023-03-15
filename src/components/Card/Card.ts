import { WrapperComponent } from 'src/common/wrapper-component';
import { AppState } from 'src/interfaces/index';
import './Card.css'

export class Card extends WrapperComponent {
    appState: AppState;
    cardState: any;
    constructor(appState: AppState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    private template(): string {
        const isExiste = this.appState.favorites.find((book: any) => book.key === this.cardState.key)
        return `
            <div class="card-box-image">
                <img 
                    src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg"
                    alt="book cover photo"
                />
            </div>
            <div class="card-content">
                <span class="card-tag">
                    ${this.cardState.subject ? `${this.cardState.subject[0]} & ${this.cardState.subject[1]}` : "is not set"}
                </span>
                <span class"card-name">
                    ${this.cardState.title}
                </span>
                <span class="card-author">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : "author not specified"}
                </span>
                <div class="card-box-btn">
                    <button 
                        class="button-add-favorites ${isExiste ? 'active' : ''}"
                    >
                        <img src="/static/icons/favorite-icon.svg" alt="favorite icon">
                    </button>
                </div>
            </div>
        `
    }


    render(): HTMLElement {
        this.wrapper.classList.add('card');
        this.wrapper.innerHTML = this.template();
        return this.wrapper;

    }
}