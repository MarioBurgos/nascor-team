import { navHeader } from "../../data/constants/nav-header.component.constants.js";

export class NavHeaderComponent {
  constructor(selector) {
    this.id = selector;
    this.parentDiv = document.querySelector(`${selector}`);
  }

  render() {
    let imgLogo = document.createElement("IMG");
    imgLogo.setAttribute("src", 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs');
    return this.parentDiv.appendChild(imgLogo);
  }
}
