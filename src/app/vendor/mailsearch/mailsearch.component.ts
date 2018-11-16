import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/service/vendor/message.service';

@Component({
  selector: 'app-mailsearch',
  templateUrl: './mailsearch.component.html',
  styleUrls: ['./mailsearch.component.scss']
})
export class MailsearchComponent implements OnInit {
  vendorMsg = {messageId:" ",
    subject:" ",
    message:" ",
    sendToUserId:" ",
    sendByUserId:" ",
    replyTo:" ",
    sentDate:" ",
    messageStatus:" ",sendByFirstName:" ",sendByLastName:" ",sendByEmail:" "} 
    messageId:number;
    total_message = []
    userId: string;
    profile_name:string;
  constructor(private msg: MessageService,private vservice: MessageService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.messageId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
   this.userId = localStorage.getItem('userId');

      this.msg.messageHistory(this.messageId).subscribe(( data )  =>  
      { console.log(data.json())
        this.total_message = data.json()
        this.total_message.forEach((msg)=>{
         
         if(msg.sendToUserId == this.userId){
          this.profile_name = msg.sendByFirstName  
         }
 
        })
      },error => 
      alert(error) // error path
    )}
  

    onSubmit() {   
console.log(this.userId)
      this.vservice.message(this.vendorMsg).subscribe(( data )  =>  
      { console.log(data.json())
        
      },error => 
      alert(error) // error path
    )}
}
