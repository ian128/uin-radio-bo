import { Component } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('showSideBar', [
      state('false', style({
        'width': '0%',
        'overflow': 'hidden'
      })),
      state('true', style({
        'width': '15%',
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
        'width': '100%',
      })),
      state('true', style({
        'width': '85%',
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

  title = 'uin-radio-bo';
}
