import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/service/news.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  imgPrefix = environment.host

  listOfNews: any[]
  constructor(
    private newsSvc: NewsService,
    private toastSvc: ToastrService
  ) { }

  flags={
    isDeletingNews: false,
  }

  async ngOnInit(){
    this.getNews()
  }

  async getNews(){
    let res: any= await this.newsSvc.getNews().toPromise()
    this.listOfNews = res
    console.log(this.listOfNews)
  }

  async deleteNews(title, id){
    var r = confirm(`News ${title} will be delete. Continue?`);
    if (r) {
      try{
        this.flags.isDeletingNews=id
        let res = await this.newsSvc.deleteNews(id).toPromise()
        console.log(res)
        this.toastSvc.success(`News ${title} has been deleted successfully`)
        this.getNews()
      }catch(e){
        console.warn(e)
      }finally{
        this.flags.isDeletingNews=false
      }
    }
  }
}
