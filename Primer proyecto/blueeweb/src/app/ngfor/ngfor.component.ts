import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../services/pokemon.service'
@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
 
})
export class NgforComponent implements OnInit {
  
  title:string= "[ngFor]";

  constructor(public PokemonService: PokemonService) { 
    
  }

  ngOnInit(): void {
  }


}
