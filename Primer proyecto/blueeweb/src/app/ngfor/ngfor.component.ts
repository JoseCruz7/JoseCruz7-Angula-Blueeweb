import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
 
})
export class NgforComponent implements OnInit {
  dataArrayPokemon:Array<any>;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  getAllPokemon(): void {
    async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await res.json();
        this.dataArrayPokemon = data.results;
      } catch (error) {
        return error
      }
    }
  }

}
