import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { VideoRoutingModule } from './video.routing.module';
import { ListVideoComponent } from './list-video/list-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { QuillModule } from 'ngx-quill';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from 'src/app/interceptors/loader-interceptor';

@NgModule({
  declarations: [
    ListVideoComponent,
    EditVideoComponent,
  ],
  imports: [
    VideoRoutingModule,
    SharedModule,
    QuillModule.forRoot(),
  ],
})
export class VideoModule { }
