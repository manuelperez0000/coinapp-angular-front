import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cant:number = 100;
  
  url:string = "http://localhost:3000/api/"+this.cant;
  constructor(private http:HttpClient){}

  getApiRest(){
    return this.http.get(this.url,{ 
      headers:{"Type-content":"aplication/json"}
    });
  }
} 
