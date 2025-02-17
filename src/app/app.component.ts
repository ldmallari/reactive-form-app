import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form-app';
  userName: string = "";
  email: string = "";
  password: string = "";
  age: number | null = null;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    age: new FormControl("")
  });

  onClickSubmit(data: { userName: string; email: string; password: string; age: number }) {
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.age = data.age;
  }
}
