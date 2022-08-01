import { constNavHeader } from "../../data/constants/nav-header.component.constants.js";

export class NavHeaderComponent {

  constructor(selector) {
    this.id = selector;
    this.parentDiv = document.querySelector(`${selector}`);
  }

  render() {
    let imgLogo = document.createElement("IMG");
    imgLogo.setAttribute("src", constNavHeader.LOGOURL);
    return this.parentDiv.appendChild(imgLogo);
  }
}
