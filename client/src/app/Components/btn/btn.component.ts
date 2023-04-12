import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {
  @Input() text : string; 
  @Output() btnClick : EventEmitter<any> = new EventEmitter();

  constructor() {
    this.text = '';
  }

  handleClick() {
    return this.btnClick.emit();
  }

}
