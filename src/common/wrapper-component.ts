export class WrapperComponent {
    public wrapper: HTMLElement;
    constructor(domElement: string) {
        this.wrapper = document.createElement(domElement);
    }

    public render(): void {
        this.wrapper
    }
}