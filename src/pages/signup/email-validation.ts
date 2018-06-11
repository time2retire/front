import {AbstractControl} from '@angular/forms';
export class EmailValidation {

    static MatchEmail(ac: AbstractControl) {
       let email = ac.get('email').value;
       let confirmEmail = ac.get('confirmEmail').value; 
        if(email != confirmEmail) {
            ac.get('confirmEmail').setErrors( {MatchEmail: true} )
        } else {
            return null
        }
    }
}