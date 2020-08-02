import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/service/videos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss']
})
export class ListVideoComponent implements OnInit {
  listOfVideos: any[]
  
  flags={
    isLoading: false,
    isDeletingVideo: false,
  }

  constructor(
    private videoSvc: VideoService,
    private toastSvc: ToastrService
  ) { }

  ngOnInit(): void {
    this.getVideos()
  }

  async getVideos(){
    try{
      this.flags.isLoading=true
      let res:any = await this.videoSvc.getVideos().toPromise()
      console.log(res)
      this.listOfVideos = res
    }catch(e){

    }finally{
      this.flags.isLoading=false
    }
  }


  async deleteVideo(title,id){
    var r = confirm(`Video ${title} will be delete. Continue?`);
    if (r) {
      try{
        this.flags.isDeletingVideo=id
        let res = await this.videoSvc.deleteVideo(id).toPromise()
        console.log(res)
        this.toastSvc.success(`Video ${title} has been deleted successfully`)
        this.getVideos()
      }catch(e){
        console.warn(e)
      }finally{
        this.flags.isDeletingVideo=false
      }
    }
  }
}
