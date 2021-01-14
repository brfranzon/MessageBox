import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PlaceholderDiractive } from './placeholder/placeholder.directive';
import * as vsMessageBox  from './vs-message-box/vs-message-box.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
 
  @ViewChild(PlaceholderDiractive) msgBoxPlaceholder : PlaceholderDiractive;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

 
  demoMessageConfirmation(){
    let message =  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua.";

    this.showMessage(vsMessageBox.TvsMessageBoxKind.mbkConfirmation, message);
  }

  demoMessageError(){
    let message =  "Oops! Something went wrong! Help us improve your experience by sending an error report!";
    
    this.showMessage(vsMessageBox.TvsMessageBoxKind.mbkError, message);
  }



    // mbk = msg box kind
  showMessage(a_mbk: vsMessageBox.TvsMessageBoxKind, a_sMsgText: string): void{

    // Factory
    const msgCompFactory = 
    this.componentFactoryResolver.resolveComponentFactory(vsMessageBox.TvsMessageBox);
    
    // DOM Element Ref
    const hostViewContainerRef = this.msgBoxPlaceholder.viewContainerRef;
    hostViewContainerRef.clear();

    // Create Comp
    const componentRef = 
    hostViewContainerRef.createComponent(msgCompFactory);


    // Eingeschaften der MessageBox (anhand der Art) eintragen!
      switch(a_mbk){
          case 'mbkInfo':
            componentRef.instance.title              = `Message Box Kind: ${a_mbk}` ; 
            componentRef.instance.msgText            = a_sMsgText;
            componentRef.instance.bgColor            = 'green';
           break;

          case 'mbkError':
            componentRef.instance.title              = `Message Box Kind: ${a_mbk}` ; 
            componentRef.instance.msgText            = a_sMsgText;
            componentRef.instance.bgColor            = 'red';
            break;

            case 'mbkConfirmation':
              componentRef.instance.title              = `Message Box Kind: ${a_mbk}` ; 
              componentRef.instance.msgText            = a_sMsgText;
              componentRef.instance.bgColor            = 'yellow';
              componentRef.instance.btnIsVisibleOK     = true; 
              componentRef.instance.btnIsVisibleCancel = true; 
            break;
            
            default:
              
              break;
            }
            
            // OK 
            componentRef.instance.btnEventOnClickOK.subscribe(
              (result)=>{
                
                if(result){
               // do confirmation actions
               console.log('OK Btn', result);
               window.alert('OK clicked!');
            }
       
          }
         )

       // Abbrechen
       componentRef.instance.btnEventOnClickCancel.subscribe(
        (result)=>{

          if(!result){
            // do confirmation actions
            console.log('Abbrechen Btn', result);
            hostViewContainerRef.clear();
          }          

         }
        )
        
       

    // OK -> return true
    // Abbrechen -> return false
    }

}














// demoMessageBox1() {
 
//   // Factory
//   const msgCompFactory = 
//   this.componentFactoryResolver.resolveComponentFactory(vsMessageBox.TvsMessageBox);
  
//   // DOM Element Ref
//   const hostViewContainerRef = 
//   this.msgBoxPlaceholder.viewContainerRef;

//   hostViewContainerRef.clear();

//   // Create Comp
//   const componentRef = 
//   hostViewContainerRef.createComponent(msgCompFactory);

//   // console.log('hostViewContainerRef', hostViewContainerRef, '/', 'this.host', this.host);

//   /**************************************/
//   // Zugriff auf die Instanz der Komponente!
//   // componentRef.instance.msgBoxPropertiesX = this.msgBoxProperties;

//   componentRef.instance.msgText    = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua. "; 
//   componentRef.instance.title      = "Titel der Message Box 1!"; 
//   componentRef.instance.icon       = 'Optionales Icon?';
//   componentRef.instance.bgColor    = 'purple';

//   // Abbrechen
//   componentRef.instance.MsgBoxClose.subscribe(
//     (event: Boolean)=>{
     
//       if(event){
//         console.log('onBtnAbClicked', event);
//         hostViewContainerRef.clear();
//       }

//     }
//   )

//   // OK 
//   componentRef.instance.onClickOK.subscribe(
//     ()=>{
//   // ... logik
//       window.alert('OK clicked!');}
//   )

// }
