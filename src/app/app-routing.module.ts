import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HistoryComponent } from './components/history/history.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
const routes: Routes = [
  {
    path: '',
    component:MainComponent,
    children: [
      {path:'projects',component:ProjectsComponent},
      {path:'history',component:HistoryComponent},
      {path:'feedback',component:FeedbackComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
