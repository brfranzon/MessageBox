export class TvsMessageBox{

    // Alert Box Properties
    title:   string; 
    
    btnOK;
    btnAb; 
    btnHilfe:  string;

    bgColor: any;
    icon:    string;
    kind:    string;
  
    constructor(public a_kind?:string){
  
        switch(a_kind){
          case 'mbkInfo':
            this.title   = "Message Box Info";
            this.bgColor = 'yellow'          ;
            this.btnOK    = 'OK'             ;
            this.btnAb    = 'Abbrechen'      ;
            this.btnHilfe = 'Hilfe'          ;
            this.icon    = 'icon info'       ;
           break;

          case 'mbkError':
            this.title    = "Message Box Error";
            this.bgColor  = 'red'              ;
            this.btnOK    = 'OK'               ;
            this.btnHilfe = 'Hilfe'            ;
            this.icon    = 'icon ERROR'        ;
            break;

          case 'mbkWarning':
            
            break;
          default:

            break;
        }

    
    }
  



  }