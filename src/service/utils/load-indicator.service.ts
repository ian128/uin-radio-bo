import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadIndicatorService {
  loaderStatusSubject = new BehaviorSubject(null)
  constructor() {
    this.loaderStatusSubject.next(false)
  }

  show(){
    this.loaderStatusSubject.next(true)
  }
  hide(){
    this.loaderStatusSubject.next(false)
  }
}
