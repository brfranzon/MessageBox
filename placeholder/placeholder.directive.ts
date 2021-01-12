import { Directive, ViewContainerRef } from "@angular/core";


@Directive({
selector: '[appPlaceholder]'       
})

export class PlaceholderDiractive{
    constructor(public viewContainerRef: ViewContainerRef){
    }
}