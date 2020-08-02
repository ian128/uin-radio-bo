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
  constructor(
    private userSvc: UserService,
    private toastSvc: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  async getUsers(){
    try{
      let res: any = await this.userSvc.getUsers().toPromise()
      this.listOfUser = res
      console.log(this.listOfUser)
    }catch(e){

    }finally{

    }
  }

  async deleteUser(name, email){
    var r = confirm(`All data related to user ${name} will be delete. Continue?`);
    if (r) {
      try{
        let res = await this.userSvc.deleteUser(email).toPromise()
        console.log(res)
        this.toastSvc.success(`User ${name} has been deleted successfully`)
        this.getUsers()
      }catch(e){
        console.warn(e)
      }
    }
  }

}
