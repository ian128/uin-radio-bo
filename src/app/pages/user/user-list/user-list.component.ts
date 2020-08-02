import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  listOfUser: any[]

  flags={
    isProcessing: false,
    isDeletingUser: false,
  }

  constructor(
    private userSvc: UserService,
    private toastSvc: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  async getUsers(){
    try{
      this.flags.isProcessing=true
      let res: any = await this.userSvc.getUsers().toPromise()
      this.listOfUser = res
      console.log(this.listOfUser)
    }catch(e){

    }finally{
      this.flags.isProcessing=false
    }
  }

  async deleteUser(name, email){
    var r = confirm(`All data related to user ${name} will be delete. Continue?`);
    console.log(r)
    if (r) {
      try{
        this.flags.isDeletingUser=email
        let res = await this.userSvc.deleteUser(email).toPromise()
        this.toastSvc.success(`User ${name} has been deleted successfully`)
        this.getUsers()
      }catch(e){
        console.warn(e)
        this.toastSvc.error(`Unable to delete user ${name}`)
      }finally{
        this.flags.isDeletingUser=false
      }
    }
  }

}
