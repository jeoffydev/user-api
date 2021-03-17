import { Directive } from '@angular/core';
import { AsyncValidator } from '@angular/forms';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAgeValidator]',
  providers: [ { provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true }]
})
export class AgeValidatorDirective implements  Validator {

  constructor() { }

  validate(control: AbstractControl) : ValidationErrors | null
  {
    let isValid = true;
    if (control.value.Age < 4)
    {
      isValid = false; //indicates invalid
    } 
    if (isValid == true)
    {
      return null; //valid
    }
    else
    {
      return { kidAge: { valid: false }}; //invalid
    }
  }

}
