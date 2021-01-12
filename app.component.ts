import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { TvsMessageBox } from './vs-message-box.class';
import { PlaceholderDiractive } from './placeholder/placeholder.directive';
import { TvsMessageBoxComponent } from './vs-message-box/vs-message-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 
  msgBoxProperties                            : TvsMessageBox[] = [];
  @ViewChild(PlaceholderDiractive) msgBoxComp : PlaceholderDiractive;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.msgBoxProperties.push(new TvsMessageBox('mbkInfo'));
  }


  demoMessageBox() {
    console.log('msgBoxProperties', this.msgBoxProperties);

    // Factory
    const msgCompFactory = 
    this.componentFactoryResolver.resolveComponentFactory(TvsMessageBoxComponent);
    
    // DOM Element Ref
    const hostViewContainerRef = this.msgBoxComp.viewContainerRef;
    hostViewContainerRef.clear();

    // Create Comp
    const componentRef = 
    hostViewContainerRef.createComponent(msgCompFactory);

    /**************************************/
    
    // Zugriff auf die Instanz der Componente!
    componentRef.instance.msgBoxProperties = this.msgBoxProperties;

    // Abbrechen
    componentRef.instance.NotshowMsgBox.subscribe(
      ()=>{hostViewContainerRef.clear();}
    )

    // OK 
    componentRef.instance.onClickOK.subscribe(
      ()=>{window.alert('OK clicked!');}
    )

  }

  
}
