import {AbstractControl} from '@angular/forms';
export class EmailValidation {

    static MatchEmail(AC: AbstractControl) {
       let email = AC.get('email').value;
       let confirmEmail = AC.get('confirmEmail').value; 
        if(email != confirmEmail) {
            console.log('false');
            AC.get('confirmEmail').setErrors( {MatchEmail: true} )
        } else {
            console.log('true');
            return null
        }
    }
}