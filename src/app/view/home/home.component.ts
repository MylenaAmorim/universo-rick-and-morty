import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  allCharacters: any;
  pagination: any;
  pageEvent: any;
  
  filterSelected: any = 0;
  pageIndex: any = 0;
  
  constructor() {}

  search() {
    
  }
}
