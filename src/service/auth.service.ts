import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { StorageService } from './secure-storage.service';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    constructor(
        private http: HttpClient,
        private cookiesSvc: CookieService,
        private secureStorageSvc: StorageService
    ){}

    private convertToFormData(body){
        let fData = new FormData()
        for(let i in body){
            fData.append(i, body[i])
        }
        return fData
    }

    login(body){
        return this.http.post(environment.base_API+'/user/login', this.convertToFormData(body))
    }

    logOut(){
        this.secureStorageSvc.clearSingleToken('admin')
        return true
    }

    signUp(body){
        this.convertToFormData(body)
        return this.http.post(environment.base_API+'/user/add', this.convertToFormData(body))
    }

    writeAdminToken(body){
        this.secureStorageSvc.setValue('admin', body)
    }

    getAdmin(){
        let res = this.secureStorageSvc.getValue('admin')
        return res
    }
}