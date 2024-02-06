import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public arrPerson: Array<User> = [];
  public editStatus = false;
  public inputLogin = '';
  public inputPassword = '';
  public inputEmail = '';
  public isColorLogin = true;
  public isColorPassword = true;
  public isColorEmail = true;
  public editSCSS = {
    backgroundColor: 'yellow',
    color: 'black'
  }

  public deleteSCSS = {
    backgroundColor: 'red',
    color: 'white'
  }
  public userIndex!: number;

  add(): void {
    const regLogin = /^\w{2,15}$/;
    const regPassword = /^[a-zA-Z0-9$&]{2,15}$/;
    const regEmail = /^[a-zA-Z]+[a-zA-Z0-9]{0,15}@((gmail\.com)|(ukr\.net))$/;
    if (regLogin.test(this.inputLogin) && regPassword.test(this.inputPassword) && regEmail.test(this.inputEmail)) {
      this.isColorLogin = true;
      this.isColorPassword = true;
      this.isColorEmail = true;
      let objUser: User = {
        login: this.inputLogin,
        password: this.inputPassword,
        email: this.inputEmail
      };
      this.arrPerson.push(objUser);
      this.inputLogin = '';
      this.inputPassword = '';
      this.inputEmail = '';
    }
    else {
      if (!regLogin.test(this.inputLogin)) {
        this.isColorLogin = false;
      }
      else {
        this.isColorLogin = true;
      }
      if (!regPassword.test(this.inputPassword)) {
        this.isColorPassword = false;
      }
      else {
        this.isColorPassword = true;
      }
      if (!regEmail.test(this.inputEmail)) {
        this.isColorEmail = false;
      }
      else {
        this.isColorEmail = true;
      }
    }
  }

  editMain(): void {
    const regLogin = /^\w{2,15}$/;
    const regPassword = /^[a-zA-Z0-9$&]{2,15}$/;
    const regEmail = /^[a-zA-Z]+[a-zA-Z0-9]{0,15}@((gmail\.com)|(ukr\.net))$/;

    if (regLogin.test(this.inputLogin) && regPassword.test(this.inputPassword) && regEmail.test(this.inputEmail)) {
      this.isColorLogin = true;
      this.isColorPassword = true;
      this.isColorEmail = true;
      class User implements User {

        login: string;
        password: string;
        email: string;

        constructor(login: string, password: string, email: string) {
          this.login = login;
          this.password = password;
          this.email = email;
        }

        getFormDataObject(): any {
          return {
            login: this.login,
            password: this.password,
            email: this.email
          };
        }
      }
      const inputLoginData = this.inputLogin;
      const inputPasswordData = this.inputPassword;
      const inputEmailData = this.inputEmail;
      const formDataInstance = new User(inputLoginData, inputPasswordData, inputEmailData);
      const formDataObject = formDataInstance.getFormDataObject();
      this.arrPerson.splice(this.userIndex, 1, formDataObject);
      this.inputLogin = '';
      this.inputPassword = '';
      this.inputEmail = '';
      this.editStatus = false;
    }
    else {
      if (!regLogin.test(this.inputLogin)) {
        this.isColorLogin = false;
      }
      else {
        this.isColorLogin = true;
      }
      if (!regPassword.test(this.inputPassword)) {
        this.isColorPassword = false;
      }
      else {
        this.isColorPassword = true;
      }
      if (!regEmail.test(this.inputEmail)) {
        this.isColorEmail = false;
      }
      else {
        this.isColorEmail = true;
      }
    }
  }

  edit(i: number): void {
    let obj: User = this.arrPerson[i];
    this.inputLogin = obj.login;
    this.inputPassword = obj.password;
    this.inputEmail = obj.email;
    this.editStatus = true;
    this.userIndex = i;
  }

  delete(i: number): void {
    this.arrPerson.splice(i, 1);
  }

  

}

export class User {
  login!: string;
  password!: string;
  email!: string;
}