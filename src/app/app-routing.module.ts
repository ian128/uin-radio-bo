import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user', loadChildren: ()=> import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'news', loadChildren: ()=> import('./pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'video', loadChildren: ()=> import('./pages/video/video.module').then(m => m.VideoModule)
  },
  {
    path: 'inquiry', loadChildren: ()=> import('./pages/inquiry/inquiry.module').then(m => m.InquiryModule)
  },
  {
    path: '**', redirectTo: 'user', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
