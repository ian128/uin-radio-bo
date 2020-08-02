import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class InquiryService{
    constructor(
        private http: HttpClient
    ){}

    private convertToFormData(body){
        let fData = new FormData()
        for(let i in body){
            if(i == 'image'){
                if(body['image'] instanceof Blob) fData.append(i, body[i], body[i].name)
                else fData.append('image', body['image'])
            }
            else fData.append(i, body[i])

            console.log(i,"=>",fData.get(i))
        }
        return fData
    }

    getInquiries(){
       return this.http.get(environment.base_API+'contact/')
    }
}