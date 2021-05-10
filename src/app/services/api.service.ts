import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inter } from '../models/models'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(){}
  
  /* constructor(private http:HttpClient) { }
  getApiRest():Observable<inter>{
    return this.http.get<inter>("http://localhost:3000/api")
  } */
}
