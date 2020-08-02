import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListNewsComponent } from './list-news/list-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
const routes: Routes=[
    {
        path: 'list', component: ListNewsComponent
    },
    {
        path: 'new', component: EditNewsComponent
    },
    {
        path: 'edit/:id', component: EditNewsComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})

export class NewsRoutingModule {}
