import { AbstractControl } from "@angular/forms";

export class CustomValidator {

  constructor() { }

  static ValidateName(control:AbstractControl){
    const value = control.value as string;

    if(value.includes('test')){
      return {
        invalidName: true
      }
    }
    return null;
  }

  
}
