import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RandomRxjsService } from 'src/app/Services/random-rxjs.service';

@Component({
  selector: 'app-hexadecimal-display',
  templateUrl: './hexadecimal-display.component.html',
  styleUrls: ['./hexadecimal-display.component.scss']
})
export class HexadecimalDisplayComponent implements OnChanges {
  @Input() hexadecimal: string;

  constructor( private randomRxjsService: RandomRxjsService ) {
    this.hexadecimal = '';
  }
  
  ngOnChanges(changes : SimpleChanges) {
    console.log(changes);
    return this.updateBackgroundColor();
  }

  updateBackgroundColor() {
    if (this.hexadecimal) {
      return this.randomRxjsService.dispatch(this.hexadecimal);
    } else {
      return
    }
  }

  copyHexadecimal(){
    navigator.clipboard.writeText(this.hexadecimal);
  }
 }
