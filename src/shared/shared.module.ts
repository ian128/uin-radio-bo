import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormErrorComponent } from './form-error/form-error.component';
import { LoaderInterceptor } from 'src/app/interceptors/loader-interceptor';
import { TokenInterceptor } from 'src/interceptors/httpInterceptor';

const core=[
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
]

const frequentlyUsedComponent=[
  FormErrorComponent
]

@NgModule({
  declarations: frequentlyUsedComponent,
  imports: core,
  exports:[
    ...frequentlyUsedComponent,
    ...core,
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
