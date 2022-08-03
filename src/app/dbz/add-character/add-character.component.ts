import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Input()
  newCharacter: Character = {
    name: '',
    power: null
  };

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add() {
    if (this.newCharacter.name.trim().length === 0) return;

    console.log(this.newCharacter);
    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: null
    }
  }
}
