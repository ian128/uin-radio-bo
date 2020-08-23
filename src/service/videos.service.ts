
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class VideoService{
    constructor(
        private http: HttpClient
    ){}

    private convertToFormData(body){
        let fData = new FormData()
        for(let i in body){
            if(i == 'image') {
                if(body[i] instanceof Blob) fData.append(i, body[i], body[i].name)
                else continue
            }
            else fData.append(i, body[i])

            console.log(i,"=>",fData.get(i))
        }
        return fData
    }

    getVideos(){
        return this.http.get(environment.base_API+'/videos/index')
    }

    async getVideoDetail(id){
        let res: any[]= await this.http.get<any>(environment.base_API+'/videos/index').toPromise()
        let news = res.find( i => i.id == id)
        return news
    }

    deleteVideo(id){
        return this.http.get(environment.base_API+'/videos/delete/'+id)
    }

    createVideo(body){
        return this.http.post(environment.base_API+'/videos/add', this.convertToFormData(body))
    }

    editVideo(id, body){
        return this.http.post(environment.base_API+'/videos/edit/'+id, this.convertToFormData(body))
    }

}