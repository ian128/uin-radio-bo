import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { ListLiveShowComponent } from './list-live-show/list-live-show.component';
import { ManageLiveShowComponent } from './manage-live-show/manage-live-show.component';
import { LiveShowRoutingModule } from './live-show.routing.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    ListLiveShowComponent,
    ManageLiveShowComponent
  ],
  imports: [
    LiveShowRoutingModule,
    SharedModule,
    QuillModule.forRoot()
  ]
})
export class LiveShowModule { }
