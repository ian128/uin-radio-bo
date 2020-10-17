import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { NewsRoutingModule } from './news.routing.module';
import { ListNewsComponent } from './list-news/list-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { QuillModule } from 'ngx-quill'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from 'src/app/interceptors/loader-interceptor';

@NgModule({
  declarations: [
    ListNewsComponent,
    EditNewsComponent
  ],
  imports: [
    NewsRoutingModule,
    SharedModule,
    QuillModule.forRoot()
  ],
})
export class NewsModule { }
