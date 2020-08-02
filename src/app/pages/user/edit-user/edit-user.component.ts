import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  selectedID: any
  content: any

  form = new FormGroup({
    name: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }), 
    email: new FormControl(null,{
      validators: [Validators.required, Validators.email],
      updateOn: 'change'
    }), 
    password: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }),
    gender: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }), 
    bd: new FormGroup({
      dd: new FormControl(null,{
        validators: [Validators.required]
      }),
      mm: new FormControl(null,{
        validators: [Validators.required]
      }),
      yyyy: new FormControl(null,{
        validators: [Validators.required]
      })
    }), 
    phone: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }), 
    status: new FormControl(1),  
  })

  flags={
    isProcessing: false
  }

  constructor(
    private userSvc: UserService,
    private activatedRoute: ActivatedRoute,
    private toastSvc: ToastrService,
    private location: Location
  ) {
    this.selectedID = this.activatedRoute.snapshot.params.id
  }

  async ngOnInit(): Promise<void> {
    if(this.selectedID){
      let res = await this.userSvc.getUserDetail(this.selectedID)
      console.log(res)
      this.form.patchValue(res)
      this.form.controls.name.setValue(res.nama)
      this.form.controls.password.setValue(null)

      let bd = res.birthdate.split('/')
      this.form.get('bd.dd').setValue(bd[0])
      this.form.get('bd.mm').setValue(bd[1])
      this.form.get('bd.yyyy').setValue(bd[2])

    }
  }
  
  async submit(){
    let body = this.form.value
    
    body.birthdate = body.bd.dd.toString().padStart(2,'0')+'/'+
    body.bd.mm.toString().padStart(2,'0')+'/'+body.bd.yyyy.toString().padStart(2,'0')
    console.log(body)

    this.flags.isProcessing=true
    try{
      if(this.selectedID){
        let res = await this.userSvc.editUser(this.selectedID,body).toPromise()
        console.log(res)
        this.toastSvc.success("User has been edited successfully")
        this.location.back()
      }else{
        let res = await this.userSvc.createUser(body).toPromise()
        console.log(res)
        this.toastSvc.success("User has been created successfully")
        this.location.back()
      }
    }catch(e){
      this.toastSvc.error("Operation fails. Check console log")
      console.warn(e)
      
    }finally{
      this.flags.isProcessing=false
    }
  }
}
