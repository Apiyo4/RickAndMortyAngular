import { Injectable } from '@angular/core';
import { characters } from '../characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  	getCharacters(){
      return characters
    }
  constructor() { }
}
