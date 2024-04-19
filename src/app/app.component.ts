import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yash';
  getNum(name:String,age:number){
    alert(`My Name is ${name} and I am ${age} years old.`)
  }
}
