import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  standalone: false,
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
   selectedCard: string | null = null;

    toggleDetails(cardId: string) {
        // Se o card clicado já estiver selecionado, desmarque-o; caso contrário, marque-o
        this.selectedCard = this.selectedCard === cardId ? null : cardId;
    }
}
