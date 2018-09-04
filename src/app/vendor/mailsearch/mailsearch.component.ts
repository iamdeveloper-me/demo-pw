import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/service/vendor/message.service';

@Component({
  selector: 'app-mailsearch',
  templateUrl: './mailsearch.component.html',
  styleUrls: ['./mailsearch.component.scss']
})
export class MailsearchComponent implements OnInit {
  // vendorMsg = {messageId:" ",
  //   subject:" ",
  //   message:" ",
  //   sendToUserId:" ",
  //   sendByUserId:" ",
  //   replyTo:" ",
  //   sentDate:" ",
  //   messageStatus:" ",sendByFirstName:" ",sendByLastName:" ",sendByEmail:" "} 
  constructor(private vservice: MessageService) { }

  ngOnInit() {
  }
  // loadScript(){this.ngOnInit;}

  //   onSubmit() {   
   	  	
  //     this.vservice.vmessage(this.vendorMsg).subscribe(( data )  =>  
  //     { console.log(data.json())
        
  //     },error => 
  //     alert(error) // error path
  //   )}
}
