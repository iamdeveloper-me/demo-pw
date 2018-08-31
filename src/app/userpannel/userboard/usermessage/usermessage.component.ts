import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../shared/service/vendor/message.service';
@Component({
  selector: 'app-usermessage',
  templateUrl: './usermessage.component.html',
  styleUrls: ['./usermessage.component.scss']
})
export class UsermessageComponent implements OnInit {

  vendorMsg = {messageId:" ",
    subject:" ",
    message:" ",
    sendToUserId:" ",
    sendByUserId:" ",
    replyTo:" ",
    sentDate:" ",
    messageStatus:" ",sendByFirstName:" ",sendByLastName:" ",sendByEmail:" "} 
  constructor(private vservice: MessageService) { }

  ngOnInit() {
  }
  loadScript(){this.ngOnInit;}

    onSubmit() {   
   	  	
      this.vservice.vmessage(this.vendorMsg).subscribe(( data )  =>  
      { 
      	console.log(data.json())
        
      },error => 
      alert(error) // error path
    )}
}
