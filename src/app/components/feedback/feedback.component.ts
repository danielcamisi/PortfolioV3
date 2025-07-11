import { Component } from '@angular/core';

interface project {
  value: string;
  viewValue: string;
  categorie:string;
}

@Component({
  selector: 'app-feedback',
  standalone: false,
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  projects: project [] = [
    {value: '1',viewValue:'DoctorMoney', categorie:'Personal Project' },
    {value: '2',viewValue:'Gonçalvez e Sousa', categorie:'Personal Project'  },
    {value: '3',viewValue:'PortfólioV3', categorie:'Personal Project'  },
    {value: '4',viewValue:'OrusFixtech', categorie:'Personal Project'  },
    {value: '5',viewValue:'rapidev.', categorie:'Personal Project'  },
    {value: '6',viewValue:'WhereToGo', categorie:'Personal Project'  },
    {value: '7',viewValue:'Feira Online', categorie:'Academic Project'  },
    {value: '8',viewValue:'Aprendendo Angular Material', categorie:'Academic Project'},
    {value: '9',viewValue:'Aprendendo PrimeNG', categorie:'Academic Project'  },
    {value: '10',viewValue:'Gestor de Tarefas', categorie:'Academic Project'  }
  ]
}
