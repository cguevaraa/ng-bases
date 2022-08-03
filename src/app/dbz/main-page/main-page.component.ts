import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 12000,
    },
    {
      name: 'Vegeta',
      power: 9000,
    },
    {
      name: 'Krillin',
      power: 2000,
    },

  ]

  addNewCharacter(newCh: Character): void {
    this.characters.push(newCh);
  }
}
