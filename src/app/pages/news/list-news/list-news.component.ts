import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/service/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  listOfNews: any[]
  constructor(
    private newsSvc: NewsService
  ) { }

  async ngOnInit(){
    let res: any= await this.newsSvc.getNews().toPromise()
    this.listOfNews = res
    console.log(this.listOfNews)
  }

}
