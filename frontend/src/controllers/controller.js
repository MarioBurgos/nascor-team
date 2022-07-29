import { NavHeaderComponent } from "../components/nav-header/nav-header.component.js";

document.addEventListener('onload', evt =>{
    let parentDiv = document.querySelector('#nav-header');
    let navHeader = new NavHeaderComponent('#nav-header');
    parentDiv = navHeader.render();
})

