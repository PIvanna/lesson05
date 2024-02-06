import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public count: number = 0;
  public myTask: string = ''; 
  public task!: string;

  getCount(data: number): void {
    this.count = data;
  }

  
  
  addUser(): void {
    if(!(this.myTask == '')){
      this.task = this.myTask;
      this.myTask = '';
      ++this.count;
    }
  }
}
