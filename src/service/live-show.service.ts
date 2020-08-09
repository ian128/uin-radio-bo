import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LiveShowService{
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

    getLiveShows(){
        return this.http.get(environment.base_API+'/liveshow/index')
    }

    getSingleLiveShow(id){
        return this.http.get(environment.base_API+'/liveshow/getLiveShow/'+id)
    }

    addLiveShow(body){
        return this.http.post(environment.base_API+'/liveshow/add', this.convertToFormData(body))
    }

    deleteLiveShow(id){
        return this.http.get(environment.base_API+'/liveshow/delete/'+id)
    }

    editLiveShow(id, body){
        return this.http.post(environment.base_API+'/liveshow/edit/'+id, this.convertToFormData(body))
    }
}
