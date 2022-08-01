import { constNavHeader } from "../../data/constants/nav-header.component.constants.js";

export class NavHeaderComponent {
  constructor(selector) {
    this.selector = selector;
    this.id = selector;
    this.parentDiv = document.querySelector(`${selector}`);
  }

  render() {
    /**let imgLogo = document.createElement("IMG");
    imgLogo.setAttribute("src", constNavHeader.LOGOURL);
    imgLogo.className = 'img-logo';
    return this.parentDiv.appendChild(imgLogo);
    */
    $(function () {
      $("#nav-header").load("../../components/nav-header/nav-header.html");
    });
  }
}
