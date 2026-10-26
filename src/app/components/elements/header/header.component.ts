import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isVisible = false;

  menuFunc() {
    this.isVisible = !this.isVisible;
  }

  // fecha o menu mobile depois de escolher uma página
  closeMenu() {
    this.isVisible = false;
  }
}
