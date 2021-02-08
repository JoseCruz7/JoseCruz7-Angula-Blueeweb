import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  arrayFruits:any=[
    {name:'Pera', count: 10, status: 0},
    {name:'Pera', count: 10, status: 0},
    {name:'Pera', count: 10, status: 0},
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
