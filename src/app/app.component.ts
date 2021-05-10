import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient) {
    console.log("constructor activo");
    this.http.get("http://localhost:3000/api")
    .subscribe((res)=>{
      console.log(res);
    })
  }
   title = 'angular-front';
  clickConsumir(){
    console.log("hola mundo desde aki");
    this.http.get("http://localhost:3000/api")
    .subscribe((res)=>{
      console.log(res);
    })
    
  }
} 
