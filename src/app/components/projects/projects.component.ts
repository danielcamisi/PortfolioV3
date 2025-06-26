import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    downloadFile(url: string, fileName: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  }

  redTo(url: string) {
    window.open(url, '_blank');
  }
}

