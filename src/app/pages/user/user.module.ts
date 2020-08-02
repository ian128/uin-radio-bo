import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { UserRoutingModule } from './user.routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    UserListComponent,
    EditUserComponent,
  ],
  imports: [
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
