import { Component } from '@angular/core';

@Component({
  selector: 'app-random-card-service',
  templateUrl: './random-card-service.component.html',
  styleUrls: ['./random-card-service.component.scss']
})
export class RandomCardServiceComponent {
  clickCounter : number;
  hexId : string;

  constructor() {
    this.clickCounter = 0;
    this.hexId = '';
  }
  
  handleClick() {
    this.clickCounter += 1;
    if (this.clickCounter % 2 !== 0) {
      this.randomColorGenerator(6);
    } else {
      this.randomColorGenerator(3);
    } 
  }

  randomColorGenerator(num : number) {
    const hexadecimal_characters = '0123456789abcdef';
    let i : number;
    let hashtag_element = '#';
    for (i = 0; i < num; i += 1) {
        const hexadecimal_char_index = hexadecimal_characters[Math.floor(Math.random() * 15)];
        hashtag_element += hexadecimal_char_index;
    }
    return this.hexId = hashtag_element;
  }
   




}
