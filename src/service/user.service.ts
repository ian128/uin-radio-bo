
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(
        private http: HttpClient
    ){}

    private convertToFormData(body){
        let fData = new FormData()
        for(let i in body){
            if(i == 'image') fData.append(i, body[i], body[i].name)
            else fData.append(i, body[i])

            console.log(i,"=>",fData.get(i))
        }
        return fData
    }

    getUsers(){
       return this.http.get(environment.base_API+'/user/')
    }

    deleteUser(email){
        return this.http.post(environment.base_API+'/user/delete/', {'email': email})
    }

}