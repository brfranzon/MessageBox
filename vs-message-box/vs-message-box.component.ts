import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from  '@angular/core';
// import { TvsMessageBoxParams } from '../vs-message-box.class';


// enumeration
export enum TvsMessageBoxKind{
  mbkInfo         = "mbkInfo",
  mbkError        = "mbkError",
  mbkConfirmation = "mbkConfirmation"
}


@Component({
  selector: 'vs-message-box',
  templateUrl: './vs-message-box.component.html',
  styleUrls: ['./vs-message-box.component.css']
})
export class TvsMessageBox {

  // Message Box Properties
  msgText:                   string;
  title:                     string;
  btnIsVisibleOK:            boolean;
  btnIsVisibleCancel:        boolean;
  bgColor:                   string;
  icon:                      string;
  

  @Output() btnEventOnClickOK      = new EventEmitter(); 
  @Output() btnEventOnClickCancel  = new EventEmitter(); 

 
  btnOnClickCancel(){
    this.btnEventOnClickCancel.emit(false);
  }

  btnOnClickOK(){
    this.btnEventOnClickOK.emit(true);
  }
}
