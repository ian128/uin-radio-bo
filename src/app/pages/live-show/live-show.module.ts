import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { ListLiveShowComponent } from './list-live-show/list-live-show.component';
import { ManageLiveShowComponent } from './manage-live-show/manage-live-show.component';
import { LiveShowRoutingModule } from './live-show.routing.module';
import { QuillModule } from 'ngx-quill';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from 'src/app/interceptors/loader-interceptor';

@NgModule({
  declarations: [
    ListLiveShowComponent,
    ManageLiveShowComponent
  ],
  imports: [
    LiveShowRoutingModule,
    SharedModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    QuillModule.forRoot()
  ],
})
export class LiveShowModule { }
