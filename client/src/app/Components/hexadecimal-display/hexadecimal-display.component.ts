import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RandomRxjsService } from 'src/app/Services/random-rxjs.service';
import { SnackbarService } from 'src/app/Services/snackbar.service';

@Component({
  selector: 'app-hexadecimal-display',
  templateUrl: './hexadecimal-display.component.html',
  styleUrls: ['./hexadecimal-display.component.scss']
})
export class HexadecimalDisplayComponent implements OnChanges {
  @Input() hexadecimal: string;

  constructor( private randomRxjsService: RandomRxjsService, private snackbarService: SnackbarService ) {
    this.hexadecimal = '';
  }
  
  ngOnChanges(changes : SimpleChanges) {
    return this.updateBackgroundColor();
  }

  updateBackgroundColor() {
    if (this.hexadecimal) {
      return this.randomRxjsService.dispatch(this.hexadecimal);
    } else {
      return
    }
  }

  snackbarMessage(message: string) {
    return this.snackbarService.dispatch(message);
  }

  copyHexadecimal(){
    navigator.clipboard.writeText(this.hexadecimal);
  }
 }
