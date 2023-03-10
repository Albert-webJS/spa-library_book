export abstract class View {
  public app: HTMLElement;
  constructor() {
    this.app = document.getElementById("root");
  }

  setTitle(title: string): void {
    document.title = title;
  }

  render(): void {
    return;
  }

  destroy(): void {
    return;
  }
}
