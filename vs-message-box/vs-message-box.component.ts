import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from  '@angular/core';
import { TvsMessageBox } from '../vs-message-box.class';

@Component({
  selector: 'vs-message-box',
  templateUrl: './vs-message-box.component.html',
  styleUrls: ['./vs-message-box.component.css']
})
export class TvsMessageBoxComponent {

  @Input()  msgBoxProperties: TvsMessageBox[] = [];
  @Output() NotshowMsgBox = new EventEmitter(); 
  @Output() onClickOK = new EventEmitter(); 


  bgColor(){
    return `${this.msgBoxProperties[0].bgColor}`;
  }

  btnAb(){
    console.log('abbrechen');
    this.NotshowMsgBox.emit();
  }

  btnOK(){
    console.log('OK');
    this.onClickOK.emit();
  }
}
