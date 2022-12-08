import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label!: string;
  @Input() placeHolder: string = "";
  @Input() typeOfInput: string = "text";

  @Output() inputEmmitter: EventEmitter<string> = new EventEmitter();


  displayInputValue(value: string) {
    console.log("Input "+this.label+" value is "+value);
  }

  emitInput(value: string) {
    this.inputEmmitter.emit(value);
  }
}
