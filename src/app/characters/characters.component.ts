import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
title = 'Rick and Morty Application'
  characters : Character[] = [
    new Character("Rick Sanchez", "https://rickandmortyapi.com/api/character/avatar/1.jpeg", "Male","Human", "Alive"),
    new Character("Morty Smith", "https://rickandmortyapi.com/api/character/avatar/2.jpeg", "Male","Human", "Alive" )

  ]
  constructor() { }

  ngOnInit() {
  }

}
