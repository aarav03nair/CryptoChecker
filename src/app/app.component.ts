import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 selectedCurrency:string ="INR"

 constructor(){}

 sendCurrency(event:String){
console.log(event)
 }
}
