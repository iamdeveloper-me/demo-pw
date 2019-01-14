import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../shared/service/vendor/message.service';

@Component({
  selector: 'app-usermailsearch',
  templateUrl: './usermailsearch.component.html',
  styleUrls: ['./usermailsearch.component.scss']
})
export class UsermailsearchComponent implements OnInit {

  userMsg = {messageId:" ",
    subject:" ",
    message:" ",
    sendToUserId:" ",
    sendByUserId:" ",
    replyTo:" ",
    sentDate:" ",
    messageStatus:" ",sendByFirstName:" ",sendByLastName:" ",sendByEmail:" "} 
    constructor(private uservice: MessageService) { }
    ngOnInit() {
    }
    loadScript(){this.ngOnInit;}
    onSubmit() {   
      this.uservice.message(this.userMsg).subscribe(( data )  =>  
      {  
      },error => 
      console.log(error) // error path
    )}
}
