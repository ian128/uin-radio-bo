import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListLiveShowComponent } from './list-live-show/list-live-show.component';
import { ManageLiveShowComponent } from './manage-live-show/manage-live-show.component';

const routes: Routes=[
    {
        path: 'list', component: ListLiveShowComponent
    },
    {
        path: 'new', component: ManageLiveShowComponent
    },
    {
        path: 'edit/:id', component: ManageLiveShowComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})

export class LiveShowRoutingModule {}
