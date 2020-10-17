import { Component, OnInit } from '@angular/core';
import { LiveShowService } from 'src/service/live-show.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-live-show',
  templateUrl: './list-live-show.component.html',
  styleUrls: ['./list-live-show.component.scss']
})
export class ListLiveShowComponent implements OnInit {
  imgPrefix = environment.host

  listLiveShows: any[]
  constructor(
    private liveShowSvc: LiveShowService,
    private toastSvc: ToastrService
  ) { }

  flags={
    isDeletingLiveShow:false 
  }
  ngOnInit(): void {
    this.getLiveShows()
  }
  
  async getLiveShows(){
    try{
      let res: any = await this.liveShowSvc.getLiveShows().toPromise()
      console.log(res)
      this.listLiveShows = res
    }catch(e){

    }
  }


  async deleteLiveShow(title,id){
    var r = confirm(`Live Show id ${id} will be delete. Continue?`);
    if (r) {
      try{
        this.flags.isDeletingLiveShow=id
        let res = await this.liveShowSvc.deleteLiveShow(id).toPromise()
        console.log(res)
        this.toastSvc.success(`Live Show ${title} has been deleted successfully`)
        this.getLiveShows()
      }catch(e){
        console.warn(e)
      }finally{
        this.flags.isDeletingLiveShow=false
      }
    }
  }

  genDate(item){
    try{
      return  new Date(item).toLocaleDateString()+' '+new Date(item).toLocaleTimeString()
    }catch(e){
      return ""
    }
  }
}
