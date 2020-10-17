import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import { LoadIndicatorService } from 'src/service/utils/load-indicator.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(
    private loaderIndicatorSvc: LoadIndicatorService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("HTTP Calling..!")
    this.loaderIndicatorSvc.show()
    return next.handle(req).pipe(
      finalize(() => {
        console.log("HTTP Done Calling..!")
          this.loaderIndicatorSvc.hide()
      })
    );

  }
}