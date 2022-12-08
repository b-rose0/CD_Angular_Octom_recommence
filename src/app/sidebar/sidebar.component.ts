import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menu: string[];

  constructor(){
    this.menu = ['dashboard', 'activity', 'ebooks', 'settings', 'messenger', 'files'];
  }
}