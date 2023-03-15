import { WrapperComponent } from 'src/common/wrapper-component';
import { State } from 'src/interfaces/index';
import './Search.css';

export class Search extends WrapperComponent {
    private state: State;
    constructor(state: State) {
        super('form');
        this.state = state;
    }

    private search(): void {
        const value = document.querySelector("input").value;
        if (value.length === 0) {
            return;
        }
        this.state.searchQuery = value;
    }

    private listener(): void {
        this.wrapper.querySelector("button").addEventListener('click', this.search.bind(this));
        this.wrapper.querySelector("input").addEventListener('keydown', (event) => {
            if (event.code === "Enter") {
                this.search()
            }
        })
    }
    private template(): string {
        return `
        <div class="search-container">
            <input 
                class="search-input"
                type="text" 
                placeholder="Find the book or author..." 
                value="${this.state.searchQuery ? this.state.searchQuery : ''}"
            />
            <img 
                src="/static/icons/search-input.svg" 
                alt="search-icon"
            />
        </div>
        <button aria-label="search" >
            <img 
                src="/static/icons/search-white.svg" 
                alt="search-icon"
            />
        </button>
    `;
    }

    public render(): HTMLElement {
        this.wrapper.classList.add('search');
        this.wrapper.innerHTML = this.template();
        this.listener();
        return this.wrapper;
    }
}