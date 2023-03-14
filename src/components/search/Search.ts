import { WrapperComponent } from 'src/common/wrapper-component';
import { State } from 'src/views/index';
import './Search.css';

export class Search extends WrapperComponent {
    private state: State;
    constructor(state: State) {
        super();
        this.state = state;
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
        return this.wrapper;
    }
}