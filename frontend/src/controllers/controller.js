import { NavHeaderComponent } from "../components/nav-header/nav-header.component.js";

document.addEventListener('click', evt =>{
    let parentDiv = document.querySelector('#nav-header');
    let navHeader = new NavHeaderComponent('#nav-header', 'hola mundo');
    parentDiv = navHeader.render();
})

