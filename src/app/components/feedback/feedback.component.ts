import {
  Component,
  signal,
  ChangeDetectionStrategy,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccesspostComponent } from '../popup/successpost/successpost.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { FailedComponent } from '../popup/failed/failed.component';

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
  readonly dialog = inject(MatDialog);

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

  constructor(
    private feedbackService: FeedbackService,
    private spinner: NgxSpinnerService
  ) {}

  submitFeedback() {
    this.spinner.show();
    const feedback = {
      nameProject: this.selectedProject,
      WhoSendFeedback: this.accept().completed ? this.feedbackName : undefined,
      desc: this.feedbackDesc,
    };

    this.feedbackService.sendFeedback(feedback).subscribe(
      (response) => {
        console.log('Feedback enviado com sucesso');
        // Aqui você pode limpar os campos ou mostrar uma mensagem de sucesso

        setTimeout(() => {
          this.spinner.hide();
        }, 2000);

        setTimeout(() => {
          this.dialog.open(SuccesspostComponent);
        }, 3000);
      },
      (error) => {
        console.error('Erro ao enviar feedback', error);
        setTimeout(() => {
          this.spinner.hide();
        }, 1200);

        setTimeout(() => {
          this.dialog.open(FailedComponent);
        }, 2500);
      }
    );
  }
}
