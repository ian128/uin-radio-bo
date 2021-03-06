
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

    async getUserDetail(id){
        let res: any[]= await this.http.get<any>(environment.base_API+'/user/').toPromise()
        let news = res.find( i => i.id == id)
        return news
    }

    deleteUser(email){
        let formData = new FormData()
        formData.append('email', email)
        return this.http.post(environment.base_API+'/user/delete/',formData)
    }

    createUser(body){
        return this.http.post(environment.base_API+'user/add', this.convertToFormData(body))
    }

    editUser(id,body){
        return this.http.post(environment.base_API+'/user/edit/'+id, this.convertToFormData(body))
    }

}