import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './home/works/works.component';
import { CenzorComponent } from './home/works/cenzor/cenzor.component';
import { UsersComponent } from './home/works/users/users.component';
import { TaskComponent } from './home/works/task/task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent },
    { path: 'users', component: UsersComponent },
    { path: 'task', component: TaskComponent }
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
