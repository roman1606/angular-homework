import { Component } from '@angular/core';
import personData from './_files/personData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework';
  public dataList:{
    id:number, 
    firstName:string, 
    lastName:string, 
    age:number, 
    hobbies:string, 
    avatarUrl:string
  }[] = personData;
}
