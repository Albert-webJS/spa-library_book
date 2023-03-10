import { View } from "../../common/view.js";

export class MainView extends View {
  constructor() {
    super();
    this.setTitle("book search");
  }

  render() {
    const container = document.createElement("div");
    container.innerHTML = "Main container!";
    this.app.innerHTML = "";
    this.app.append(container);
  }
}
