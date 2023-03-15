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
                    <svg class="favorite" width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M1 3.00001C1 2.07954 1.74619 1.33334 2.66667 1.33334H9.33333C10.2538 1.33334 11 2.07954 11 3.00001V15.5L6 10.5L1 15.5V3.00001Z" 
                            stroke-width="1.5"
                            stroke-linecap="round" 
                            stroke-linejoin="round"/>
                        </svg>
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