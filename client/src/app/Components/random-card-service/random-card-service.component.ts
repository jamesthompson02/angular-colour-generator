import { Component } from '@angular/core';

@Component({
  selector: 'app-random-card-service',
  templateUrl: './random-card-service.component.html',
  styleUrls: ['./random-card-service.component.scss']
})
export class RandomCardServiceComponent {
  clickCounter : number;

  constructor() {
    this.clickCounter = 0;
  }

  handleClick() {
    return this.clickCounter += 1;
  }

}
