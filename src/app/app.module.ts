import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
