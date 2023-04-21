import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  menu = [
    {
      text: 'Home',
      value: ''
    },
    {
      text: 'Services',
      value: ''
    },
    {
      text: 'News',
      value: ''
    },
    {
      text: 'Blog',
      value: ''
    },
    {
      text: 'Contact',
      value: ''
    },

  ]
}
