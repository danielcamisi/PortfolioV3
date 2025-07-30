import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  isVisible = false;
 
constructor(private rota: Router){}

 menuFunc() {
        // Se o card clicado já estiver selecionado, desmarque-o; caso contrário, marque-o
        this.isVisible = !this.isVisible;
    }

  ngOnInit():void {
    // Initialization logic can go here
  }

  
  redTo(route: string) {
    this.rota.navigate([route]);
  }
}
