import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
// import { Character } from '../character';
import { CharacterService } from '../character-service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

characters : Character[]
  constructor( public characterService: CharacterService) {
    this.characters = characterService.getCharacters()
   }

  ngOnInit() {
  }

}
