import { constNavHeader } from "../../data/constants/nav-header.component.constants.js";

export class NavHeaderComponent {
  constructor(selector) {
    this.selector = selector;
    this.id = selector;
    this.parentDiv = document.querySelector(`${selector}`);
  }

  render() {
   
   /**inyecta el archivo html */
    $(function () {
      $("#nav-header").load("../../components/nav-header/nav-header.html");
    });
    /**inyecta su css en el tag head */
    $("head").append('<link rel="stylesheet" href="../../components/nav-header/nav-header.css" type="text/css" />');
  }
}
