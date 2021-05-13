import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showmenu:boolean = false

  menuOf(){
    this.showmenu = !this.showmenu
  }
  constructor() { }
  ngOnInit(): void {
  }

}
