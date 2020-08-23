import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage'
const SECRET_KEY = `a,_&@**@($&@*($*!&*((&*&$*(#&(4207839(&*(@$^T(!&^*(Yi`;

@Injectable({
    providedIn: 'root'
})

export class StorageService {
constructor() { }
    private secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key) {
        key = CryptoJS.SHA256(key, SECRET_KEY);
    
        return key.toString();
    },
    // Encrypt the localstorage data
    encrypt: function encrypt(data) {
        data = CryptoJS.AES.encrypt(data, SECRET_KEY);
        data = data.toString();
        return data;
    },
    // Decrypt the encrypted data
    decrypt: function decrypt(data) {
        data = CryptoJS.AES.decrypt(data, SECRET_KEY);
        data = data.toString(CryptoJS.enc.Utf8);
        return data;
    }
    });

    public setValue(key: string, value: any) {
        this.secureStorage.setItem(key, value);
    }
    // Get the json value from local storage
    public getValue(key: string) {
        return this.secureStorage.getItem(key);
    }

    public clearSingleToken(key: string){
        return this.secureStorage.removeItem(key);
    }

    // Clear the local storage
    public clearAllToken() {
        return this.secureStorage.clear();
    }
}