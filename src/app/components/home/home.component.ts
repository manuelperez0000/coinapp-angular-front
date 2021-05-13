import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaCriptos:any
  loading:boolean = true
  constructor(private _apiservice:ApiService) {}
   ngOnInit(){
     this.loading = false
  /*   this._apiservice.getApiRest().subscribe((res:any)=>{
      console.log(res);
      this.listaCriptos = res;
      this.loading = false  
    }) */
  }

}
