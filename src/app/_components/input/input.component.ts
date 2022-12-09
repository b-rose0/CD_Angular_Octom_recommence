import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{

  @Input() label!: string;
  @Input() placeHolder: string = "";
  @Input() typeOfInput: string = "text";
  isPassword!: boolean;

  @Output() inputEmmitter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.isPassword = this.typeOfInput == "password";
  }

  displayInputValue(value: string) {
    console.log("Input "+this.label+" value is "+value);
  }

  emitInput(value: string) {
    this.inputEmmitter.emit(value);
  }

  togglePassword() {
    if(this.typeOfInput == "password") {
      this.typeOfInput = "text";
    } else {
      this.typeOfInput = "password";
    }
  }
}
