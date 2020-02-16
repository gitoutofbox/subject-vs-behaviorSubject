import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.sass']
})
export class SidebarLeftComponent implements OnInit {
  subscription: Subscription;
  subscriptionBehavior: Subscription;
  message: Array<string> = [];
  messageBehavior: Array<string> = [];

  constructor(private commonServiceService: CommonServiceService) { 
    this.subscription = this.commonServiceService.getMessage().subscribe(resp => {
      console.log(`%c response in left sidebar component ${resp}`, 'background: #47e22b; color: #000');
      this.message.push(resp);
      console.log('message', this.message)
    });

    this.subscriptionBehavior = this.commonServiceService.getMessageBehavior().subscribe(resp => {
      console.log(`%c response in app component behaviorSubject ${resp}`, 'background: cadetblue; color: #000');
      this.messageBehavior.push(resp);
    });
  }

  ngOnInit() {
  }

}
