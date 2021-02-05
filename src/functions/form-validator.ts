import { FormControl } from "@angular/forms";

export const ExtendedFormValidator={
    Min50Char: (e: FormControl)=>{
        let val = (e.value || '').length
        if(val > 50) return {'max50Char': true}
        else return null
    }
}