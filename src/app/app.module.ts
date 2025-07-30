import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HistoryComponent } from './components/history/history.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './components/elements/navbar/navbar.component';
import { HeaderComponent } from './components/elements/header/header.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { MainContentComponent } from './components/elements/main-content/main-content.component';
import { ContactsComponent } from './components/elements/contacts/contacts.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDialogModule} from '@angular/material/dialog';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

import { NgxSpinnerModule } from "ngx-spinner";

import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { SuccesspostComponent } from './components/popup/successpost/successpost.component';
import { FailedComponent } from './components/popup/failed/failed.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HistoryComponent,
    FeedbackComponent,
    ProjectsComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ContactsComponent,
    SuccesspostComponent,
    FailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    CommonModule,
    NgIf,
    HttpClientModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
