import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  subscription: Subscription;
  subscriptionBehavior: Subscription;
  message: Array<string> = [];
  messageBehavior: Array<string> = [];

  constructor(private commonServiceService: CommonServiceService) {
    this.subscription = this.commonServiceService.getMessage().subscribe(resp => {
      console.log(`%c response in app component ${resp}`, 'background: cadetblue; color: #000');
      this.message.push(resp);
    });

    this.subscriptionBehavior = this.commonServiceService.getMessageBehavior().subscribe(resp => {
      console.log(`%c response in app component behaviorSubject ${resp}`, 'background: cadetblue; color: #000');
      this.messageBehavior.push(resp);
    });
  }

  ngOnInit() {}

}
