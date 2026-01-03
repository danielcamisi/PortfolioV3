import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  apiBaseUrl = 'https://mynewapi-gt4n.onrender.com';

  downloadFile(url: string, fileName: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  constructor(
    private projectsService: ProjectsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.projectsService.getProjects().subscribe(
      (data: any[]) => {
        this.projects = data;

        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching projects:', error); // Para o spinner em caso de erro
        this.spinner.hide(); // Esconde o spinner
      }
    );
  }

  getAcademicProjects() {
    return this.projects.filter((project) => project.projectType === 'academy');
  }

  getPersonalProjects() {
    return this.projects.filter(
      (project) => project.projectType === 'personal'
    );
  }

  getFullImagePath(imgPath: string): string {
    if (!imgPath) return '';
    if (imgPath.startsWith('http')) return imgPath;
    return `${this.apiBaseUrl}${imgPath}`;
  }

  redTo(url: string) {
    window.open(url, '_blank');
  }

  hasTechnologies(project: any): boolean {
    return !!(
      project.technology ||
      project.secondTechnology ||
      project.thirdTechnology
    );
  }

  frameworkImages: { [key: string]: string } = {
    angularIcon: 'assets/imgs/angularIcon.png',
    angularIcondark: 'assets/imgs/angularIconDark.png',
    angularMaterialIcon: 'assets/imgs/angularMaterialIcon.png',
    angularMaterialIcondark: 'assets/imgs/angularMaterialIcondark.png',
    reactIcon: 'assets/imgs/reactIcondark.jpg',
    vueIcon: 'assets/imgs/vueIcon.png',
    vueIcondark: 'assets/imgs/vueIcondark.webp',
    nextjsIcon: 'assets/imgs/nextjsIcon.webp',
    nextjsIcondark: 'assets/imgs/nextIconDark.png',
    bootstrapIcon: 'assets/imgs/bootstrapIcon.png',
    bootstrapIcondark: 'assets/imgs/bootstrapIcondark.png',
  };

  databaseImages: { [key: string]: string } = {
    mongodbIcon: 'assets/imgs/mongodbIconbranco.png',
    mongodbIcondark: 'assets/imgs/mongodbIcondark.png',
    mysqlIcon: 'assets/imgs/mysqlIconbranco.png',
    mysqlIcondark: 'assets/imgs/mysqlIconDark.png',
    oracleIcondark: 'assets/imgs/oracleIcondark.png',
    postgresqlIcon: 'assets/imgs/postIcon.webp',
    postgresqlIcondark: 'assets/imgs/postIconDark.png',
    htmlIcon: 'assets/imgs/htmlIcon.png',
    htmlIcondark: 'assets/imgs/htmlIcondark.png',
    cssIcon: 'assets/imgs/cssIcon.png',
    cssIcondark: 'assets/imgs/cssIconDark.png',
  };

  technologyImages: { [key: string]: string } = {
    javascriptIcon: 'assets/imgs/jsiconbranco.png',
    javascriptIcondark: 'assets/imgs/jsIcondark.webp',
    typescriptIcon: 'assets/imgs/tsIcon.png',
    typescriptIcondark: 'assets/imgs/tsIcondark.png',
    primengIcon: 'assets/imgs/primengIcon.png',
    csharpIcon: 'assets/imgs/csharpIcon.png',
    csharpIcondark: 'assets/imgs/csharpIcondark.png',
  };

  getTechnologyImage(technology: string): string {
    return this.technologyImages[technology] || ''; // Retorna a imagem correspondente ou uma string vazia
  }

  getFrameworkImage(framework: string): string {
    return this.frameworkImages[framework] || '';
  }

  getDatabaseImage(database: string): string {
    return this.databaseImages[database] || '';
  }
}
