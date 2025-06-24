  import { Component } from '@angular/core';
  import { OnInit } from '@angular/core';

  @Component({
    selector: 'app-main-content',
    standalone: false,
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.css']
  })
  export class MainContentComponent implements OnInit {

    ngOnInit(): void {
      
    }
    github():void{
      window.open('https://github.com/danielcamisi', '_blank');
    }

    insta():void{
      window.open('https://www.instagram.com/daniel.camisi/', '_blank');
    }

    linkedin():void{
      window.open('https://www.linkedin.com/in/danielcamisi/', '_blank');
    }

    downloadCV(): void {
      
      const link = document.createElement('a');
      console.log('Downloading CV...');
      link.href ='/assets/arqs/cvdaniel.pdf'; // Path to your CV file
      link.download = 'cvdaniel.pdf'; // Name of the downloaded file
      link.click();
    }
  }
