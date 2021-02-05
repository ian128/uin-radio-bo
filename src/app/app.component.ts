import { Component } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadIndicatorService } from 'src/service/utils/load-indicator.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('showSideBar', [
      state('false', style({
        'width': '12pt',
        'overflow': 'hidden'
      })),
      state('true', style({
        'width': '120pt',
        'overflow': 'hidden'
      })),
      transition('false => true', [
        animate('0.3s cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
      transition('true => false', [
        animate('0.3s cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
    ]),

    trigger('expandedMenu', [
      state('false', style({
        'width': 'calc(100% - 12pt)',
      })),
      state('true', style({
        'width': 'calc(100% - 120pt)',
        'box-shadow': '-10px 0px 10px #00000050'

      })),
      transition('false => true', [
        animate('0.3s cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
      transition('true => false', [
        animate('0.3s cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
    ]),
  ],
})
export class AppComponent {
  collapsed: boolean
  onRequestHTTP: boolean

  flags={
    isProcessing: false
  }

  form = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
      updateOn: 'change'
    }),
    password: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }),
  })

  constructor(
    public router: Router,
    private authSvc: AuthService,
    private toastSvc: ToastrService,
    private loadSvc: LoadIndicatorService
  ){

    if(environment.production){
      console.warn("Console log will be obscured!")
      window.console.log = function () {};
    }

    
    this.router.events.subscribe(
      (res)=>{
        if(res instanceof NavigationEnd){
          try{
            document.getElementById('outlet').scrollTo(0, 0);
          }catch(e){
            
          }
        }
      }
    )

    this.loadSvc.loaderStatusSubject.subscribe(res=>{
      console.log(res)
      setTimeout(()=>{
        this.onRequestHTTP=res
      })
    })
  }

  title = 'uin-radio-bo';

  link(){
    let s = this.router.url
    if(s.includes('news/list')) return 'News List'
    else if(s.includes('news/edit')) return 'News Edit'
    else if(s.includes('news/new')) return 'New News'

    else if(s.includes('user/list')) return 'List User'
    else if(s.includes('user/new')) return 'New User'
    else if(s.includes('user/edit')) return 'Modify User'

    else if(s.includes('live-show/list')) return 'Live Show List'
    else if(s.includes('live-show/new')) return 'New Live Show'
    else if(s.includes('live-show/edit')) return 'Edit Live Show'

    else if(s.includes('video/list')) return 'Video List'
    else if(s.includes('video/new')) return 'New Video'
    else if(s.includes('video/edit')) return 'Edit Video'

    else if(s.includes('inquiry/list')) return 'Inquiries'

  }

  async login(){
    this.flags.isProcessing=true

    try{
      let res: any = await this.authSvc.login(this.form.value).toPromise()
      if(res.status == 0) this.toastSvc.error("Wrong email and/or password combinations")
      else {
        if(res.as == 1){
          this.toastSvc.success("Login is successful")
          this.authSvc.writeAdminToken(res)
          this.form.reset()
        }else{
          this.toastSvc.error("You don't have access to be admin")
        }
      }

    }catch(e){
      console.log(e)
    }
    finally{
      this.flags.isProcessing=false
    }
  }

  isLoggedIn(){
    return this.authSvc.getAdmin()
  }

  logout(){
    this.authSvc.logOut()
    this.toastSvc.success("Logout is successful!")
  }
}
