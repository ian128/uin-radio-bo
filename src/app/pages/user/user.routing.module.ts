import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
const routes: Routes=[
    {
        path: 'list', component:  UserListComponent
    },
    {
        path: 'new-admin', component: EditUserComponent,
    },
    {
        path: 'edit/:id', component: EditUserComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})

export class UserRoutingModule {}
