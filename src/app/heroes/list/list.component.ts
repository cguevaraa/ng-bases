import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = [
    'Ironman',
    'Hulk',
    'Spiderman',
    'Thor',
    'Captain America',
    'Wonder Woman',
    'Batman',
    'Captain Marvel'
  ];

  deletedHero: string = '';

  eraseRandom() {
    let random: number = Math.random();
    let index: number = Math.floor((this.heroes.length * random));
    console.log(index);
    this.deletedHero = this.heroes.splice(index, 1)[0];
  }
}
