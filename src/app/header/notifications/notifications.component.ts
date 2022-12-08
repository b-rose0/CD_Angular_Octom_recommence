import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  nombreNotifications! : number;


  ngOnInit() {
    this.nombreNotifications = 2;
  }
}
