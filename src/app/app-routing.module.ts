import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HistoryComponent } from './components/history/history.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactsComponent } from './components/elements/contacts/contacts.component';
import { HeaderComponent } from './components/elements/header/header.component';

const routes: Routes = [
  {
    path: '',component:HeaderComponent,
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:MainComponent},
      {path:'projects',component:ProjectsComponent},
      {path:'history',component:HistoryComponent},
      {path:'feedback',component:FeedbackComponent},
      {path:'contacts',component:ContactsComponent},
    ]
  }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
