import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(ac: AbstractControl) {
        let password = ac.get('password').value;
        let confirmPassword = ac.get('confirmPassword').value;
        if(!password.isValid){
            // ac.get('confirmPassword').disabled
            if(password != confirmPassword) {
                ac.get('confirmPassword').setErrors( {MatchPassword: true} )
            } 
            else {
                ac.get('confirmPassword').setErrors(null)
                return null
            }
        } 
        
    }   
}