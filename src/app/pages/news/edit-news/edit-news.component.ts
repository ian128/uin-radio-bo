import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsService } from 'src/service/news.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {
  selectedImg: any
  selectedImgFile: File

  selectedID: any
  content= "<p>Bisa <strong>Bold</strong>, <em>Italic</em>, <u>Underline</u></p>"

  form = new FormGroup({
    title: new FormControl(null,{
      validators: [Validators.required]
    }),
    author: new FormControl(null,{
      validators: [Validators.required]
    }), 
    datetime: new FormControl(null),
    image: new FormControl(null,{
      validators: [Validators.required]
    }),
    content: new FormControl(null,{
      validators: [Validators.required]
    })
  })

  constructor(
    private newsSvc: NewsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.selectedID = this.activatedRoute.snapshot.params.id
  }

  async ngOnInit(): Promise<void> {
    if(this.selectedID){
      let res = await this.newsSvc.getNewsDetail(this.selectedID)
      res.image = 'http://developergadogado.xyz/mantapp/'+res.image

      this.selectedImg = res.image

      this.content = res.content
      console.log(res)
      this.form.patchValue(res)
      this.updateRichText()
    }
  }

  imageChanged(e){
    e.preventDefault()

    let target: any = event.target
    let file = target.files[0]

    var img = new Image();
    img.src = window.URL.createObjectURL(file);

    //querying the dimensions of the image
    img.onload =(e: any) => {
      let width = img.naturalWidth, height = img.naturalHeight;
      window.URL.revokeObjectURL( img.src );
    
      //querying the data of the image
      var reader:FileReader = new FileReader();
      reader.onloadend = (e) => {
        let res:any = reader.result

        let sz = (target.files.item(0).size)/1024/1024 //convert to Mega Byte
        console.log(sz)
        if(sz > 1.0){
          alert("Image cannot be large than 1 MB! Please choose another image")
          return
        }

      
        this.selectedImg=res
        this.selectedImgFile=target.files.item(0)
        this.form.controls.image.setValue(this.selectedImgFile)
      }
      reader.readAsDataURL(file)
        
    }
  }

  updateRichText(){
    this.form.controls.content.setValue(this.content)
  }
  
  async submit(){
    this.form.controls.datetime.patchValue(new Date().toISOString())
    let body = this.form.value
    console.log(body)

    try{
      if(this.selectedID){
        let res = await this.newsSvc.editNews(this.selectedID,body).toPromise()
        console.log(res)
      }else{
        let res = await this.newsSvc.createNews(body).toPromise()
        console.log(res)
      }
    }catch(e){
      console.warn(e)
    }finally{

    }
  }
}
