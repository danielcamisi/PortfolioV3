import {
  Component,
  signal,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';

interface project {
  value: string;
  viewValue: string;
  categorie: string;
}

interface Accept {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-feedback',
  standalone: false,
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None, //SEMPRE NONE AO PRECISAR MUDAR O STYLE DE UM COMPONENT DE QUALQUER LIB IMPORTADA!!!!!!
})
export class FeedbackComponent {
  // a API antiga (Render) foi desativada, então o feedback agora vai direto pro meu WhatsApp
  private readonly whatsapp = '5519994516557';
  readonly maxLength = 800;

  show = false;

  accept = signal<Accept>({
    name: 'Deseja informar seu nome?',
    completed: false,
  });

  toggleNameInput() {
    this.accept.update((prev) => ({ ...prev, completed: !prev.completed }));
    this.show = !this.show;
  }

  projects: project[] = [
    {
      value: 'DoctorMoney',
      viewValue: 'DoctorMoney',
      categorie: 'Personal Project',
    },
    {
      value: 'Gonçalvez e Sousa',
      viewValue: 'Gonçalvez e Sousa',
      categorie: 'Personal Project',
    },
    {
      value: 'PortfólioV3',
      viewValue: 'PortfólioV3',
      categorie: 'Personal Project',
    },
    {
      value: 'OrusFixtech',
      viewValue: 'OrusFixtech',
      categorie: 'Personal Project',
    },
    { value: 'rapidev.', viewValue: 'rapidev.', categorie: 'Personal Project' },
    {
      value: 'WhereToGo',
      viewValue: 'WhereToGo',
      categorie: 'Personal Project',
    },
    {
      value: 'Feira Online',
      viewValue: 'Feira Online',
      categorie: 'Academic Project',
    },
    {
      value: 'Aprendendo Angular Material',
      viewValue: 'Aprendendo Angular Material',
      categorie: 'Academic Project',
    },
    {
      value: 'Aprendendo PrimeNG',
      viewValue: 'Aprendendo PrimeNG',
      categorie: 'Academic Project',
    },
    {
      value: 'Gestor de Tarefas',
      viewValue: 'Gestor de Tarefas',
      categorie: 'Academic Project',
    },
  ];

  selectedProject: string = '';
  feedbackDesc: string = '';
  feedbackName: string = '';

  get canSend(): boolean {
    return !!this.selectedProject && this.feedbackDesc.trim().length > 0;
  }

  submitFeedback() {
    if (!this.canSend) return;

    const name = this.accept().completed ? this.feedbackName.trim() : '';
    const message =
      `Olá Daniel! Vim pelo seu portfólio e quero deixar um feedback sobre o projeto *${this.selectedProject}*:\n\n` +
      this.feedbackDesc.trim() +
      (name ? `\n\n- ${name}` : '');

    window.open(
      `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener'
    );
  }
}
