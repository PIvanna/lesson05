import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './home/works/works.component';
import { CenzorComponent } from './home/works/cenzor/cenzor.component';
import { UsersComponent } from './home/works/users/users.component';
import { TaskComponent } from './home/works/task/task.component';
import { ChildComponent } from './home/works/task/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    UsersComponent,
    TaskComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
