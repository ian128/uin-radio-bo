import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InquiryListComponent } from './inquiry-list/inquiry-list.component';

const routes: Routes=[
    {
        path: 'list', component: InquiryListComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})

export class InquiryRoutingModule {}
