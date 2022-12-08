import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() iconName?: string;
  @Input() colorTextButton: string = "white"; 
  @Input() colorBackgroundButton: string = "blue";
  @Input() fontSize: string = "medium";
  @Output() clickEmitter: EventEmitter<boolean> = new EventEmitter();
  paddingTop: string = "0.4em";

  fontWeight: string = "bold";

  ngOnInit(){
    if(this.iconName){
      this.fontWeight = "normal";
      this.paddingTop = "0.8em"
    }
  }
}
