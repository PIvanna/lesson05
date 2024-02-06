import { Component, Output,Input, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  public arrPerson: Array<User> = [];
  public elementTextContent!: string;
  public _userTask!: string;
  public editStatus = false;
  public myChange: string = ''; 
  public userIndex!: number;
  public userCheck!: boolean;
  public editSCSS = {
    backgroundColor: 'yellow',
    color: 'black'
  } 

  public deleteSCSS = {
    backgroundColor: 'red',
    color: 'white'
  }
  @Output() fromChildCount = new EventEmitter<number>();

  @Input()
  set userTask(task: string) {
     if(task){
      this.addUser(task, false);
     }
  }
  
  addUser(task: string, status: boolean): void {
    const user: User = { task, status };
    this.arrPerson.push(user);
    this.sendCountTask();
  }


  
  onCheckboxChange(user: User): void {
    user.status = !user.status; 
  }

  sendCountTask(): void {
    this.fromChildCount.emit(this.arrPerson.length);
  }

  edit(i: number): void {
    let obj: User = this.arrPerson[i];
    this.editStatus = true;
    this.myChange = obj.task;
    this.userCheck = obj.status;
    this.userIndex = i;
  }

  delete(i: number): void {
    this.arrPerson.splice(i, 1);
    this.sendCountTask();
  }

  saveUser(): void{
    let obj: User ={
      task: this.myChange, 
      status: this.userCheck
    }
    this.arrPerson.splice(this.userIndex, 1, obj);
    this.myChange = '';
    this.userCheck = false;
    this.editStatus = false;
  }
}




export class User {
  task!: string;
  status!: boolean;
}
