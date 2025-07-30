import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Feedback {
  nameProject: string;
  WhoSendFeedback?: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'https://myapi-main.onrender.com/feedbacks'; // URL da sua API
  private wakeUpInterval: any;
  


  constructor(private http: HttpClient) { }

  sendFeedback(feedback: Feedback): Observable<any> {
    return this.http.post(this.apiUrl, feedback);
  }

private wakeUpApi(): Observable<any> {
  return this.http.get(this.apiUrl).pipe(
    catchError(error => {
      console.error('Erro ao acordar a API:', error);
      return of(null); // Retorna um valor padrão ou nulo em caso de erro
    })
  );
}


private startWakeUpCalls(): void {
  // Fazer a primeira chamada imediatamente
  this.wakeUpApi().subscribe();

  // Configurar o intervalo para chamar a cada 1 hora (3600000 ms)
  this.wakeUpInterval = setInterval(() => {
    this.wakeUpApi().subscribe();
  }, 3600000);
}

// Método de limpeza para parar o intervalo
ngOnDestroy(): void {
  if (this.wakeUpInterval) {
    clearInterval(this.wakeUpInterval);
  }
}

}