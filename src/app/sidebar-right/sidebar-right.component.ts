import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

  
@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.sass']
})
export class SidebarRightComponent implements OnInit {
  myMessage: string = '';
  constructor(private commonServiceService: CommonServiceService) { }

  ngOnInit() {
  }
  sendMessage() {
    if(this.myMessage.length) {
      this.commonServiceService.sendMessage(this.myMessage);      
      this.myMessage = '';
    }
  }

}
