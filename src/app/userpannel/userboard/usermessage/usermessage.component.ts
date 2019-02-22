import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../shared/service/vendor/message.service';
@Component({
  selector: 'app-usermessage',
  templateUrl: './usermessage.component.html',
  styleUrls: ['./usermessage.component.scss']
})
export class UsermessageComponent implements OnInit {
  historyArr:string[];
  constructor(private uservice: MessageService) { }
  ngOnInit() {
  }
}