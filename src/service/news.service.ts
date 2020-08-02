
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewsService{
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

    getNews(){
       return this.http.get(environment.base_API+'news/')
    }

    async getNewsDetail(id){
        let res: any[]= await this.http.get<any>(environment.base_API+'news/').toPromise()
        let news = res.find( i => i.id == id)
        return news
     }

    createNews(body){
        return this.http.post(environment.base_API+'news/add', this.convertToFormData(body))
    }

    editNews(id, body){
        return this.http.post(environment.base_API+'news/edit/'+id, this.convertToFormData(body))
    }
}