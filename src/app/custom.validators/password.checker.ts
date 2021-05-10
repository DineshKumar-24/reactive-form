import {FormGroup} from "@angular/forms";

export function PasswordChecker(controlName:string,compareControlName:string){
    return (formGroup:FormGroup)=>{
        const password=formGroup.controls[controlName];
        const confpass=formGroup.controls[compareControlName];
        if(password.value!== confpass.value)
        {
            confpass.setErrors({mustmatch:true});
        }
        else
        {
            confpass.setErrors(null);
        }
    }

}
