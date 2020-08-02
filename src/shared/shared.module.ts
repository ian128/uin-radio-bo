import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormErrorComponent } from './form-error/form-error.component';

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
})
export class SharedModule { }
