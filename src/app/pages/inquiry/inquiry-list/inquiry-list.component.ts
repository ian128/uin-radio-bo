import { Component, OnInit } from '@angular/core';
import { InquiryService } from 'src/service/inquiry.service';

@Component({
  selector: 'app-inquiry-list',
  templateUrl: './inquiry-list.component.html',
  styleUrls: ['./inquiry-list.component.scss']
})
export class InquiryListComponent implements OnInit {
  listOfInquiries: any[]

  constructor(
    private inquirySvc: InquiryService
  ) { }

  ngOnInit(): void {
    this.getInquiries()
  }

  async getInquiries(){
    try{
      let res: any= await this.inquirySvc.getInquiries().toPromise()
      this.listOfInquiries = res
      console.log(this.listOfInquiries)
    }catch(e){

    }
  }

}
