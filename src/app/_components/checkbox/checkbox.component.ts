import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label!: string;
  @Output() checkboxEmitter: EventEmitter<boolean> = new  EventEmitter();
  debugIteration: number =0;
  isChecked: boolean = false;

  emitCheckbox(value:string) {
    this.isChecked = !this.isChecked;
    //console.log("Input "+this.label+" is checked "+this.isChecked);
    this.checkboxEmitter.emit(this.isChecked);
  }

}
