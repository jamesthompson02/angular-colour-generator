import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hexadecimal-display',
  templateUrl: './hexadecimal-display.component.html',
  styleUrls: ['./hexadecimal-display.component.scss']
})
export class HexadecimalDisplayComponent {
  @Input() hexadecimal: string;

  constructor() {
    this.hexadecimal = '';
  }
  
}
