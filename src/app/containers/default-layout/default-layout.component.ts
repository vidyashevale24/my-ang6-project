import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import {UserService} from "../../user.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  message = "Loading...";
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  constructor(private user: UserService){

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  ngOnInit(){
    this.user.getSomeData().subscribe(data => {
      this.message = data.message
      if(!data.status){
        localStorage.removeItem('loggedIn')
      }
    })
  }
}
