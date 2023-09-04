import { Component } from '@angular/core';
import { faUser, faBell, faShoppingCart, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDrawerOpen = false;

  faUser = faUser;
  faBell = faBell;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faTimes = faTimes

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

}
