import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { InquiryRoutingModule } from './inquiry.routing.module';
import { InquiryListComponent } from './inquiry-list/inquiry-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from 'src/app/interceptors/loader-interceptor';

@NgModule({
  declarations: [
    InquiryListComponent
  ],
  imports: [
    InquiryRoutingModule,
    SharedModule,
  ],
})
export class InquiryModule { }
