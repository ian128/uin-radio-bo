import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListVideoComponent } from './list-video/list-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';

const routes: Routes=[
    {
        path: 'list', component: ListVideoComponent
    },
    {
        path: 'new', component: EditVideoComponent
    },
    {
        path: 'edit/:id', component: EditVideoComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})

export class VideoRoutingModule {}
