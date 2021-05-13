import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-criptos',
  templateUrl: './criptos.component.html',
  styleUrls: ['./criptos.component.css']
})
export class CriptosComponent implements OnInit {
  listaCriptos:any
  loading:boolean = true
  constructor(private _apiservice:ApiService) {}
   ngOnInit(){
     this.loading = false
    this._apiservice.getApiRest().subscribe((res:any)=>{
      console.log(res);
      this.listaCriptos = res;
      this.loading = false  
    })
  }

}