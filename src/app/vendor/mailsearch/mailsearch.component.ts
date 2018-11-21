import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/service/vendor/message.service';
import { reverse } from 'dns';
import * as $ from 'jquery';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })

export class ReversePipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}


@Component({
  selector: 'app-mailsearch',
  templateUrl: './mailsearch.component.html',
  styleUrls: ['./mailsearch.component.scss']
})
export class MailsearchComponent implements OnInit {
  today: number = Date.now();
date_old = '1990-01-01'
date_true:boolean = true;
  vendorMsg = {messageId:0,
    subject: "hiiiiiiiii",
    message: "",
    sendToUserId: "",
    sendByUserId: "",
    replyTo: 0,
    messageStatus:0,
    isDeleted: false,
    isStared: false
  } 
    messageId:number;
    total_message = []
    userId: string;
    profile_name:string;
  constructor(private msg: MessageService,private vservice: MessageService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    $("textarea").keydown(function(event) {
      if (event.keyCode == 13 && !event.shiftKey) {
        
       return false;
       }
});

   this.messageId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
   this.userId = localStorage.getItem('userId');

      this.msg.messageHistory(this.messageId).subscribe(( data )  =>  
      { console.log(data.json())
        this.total_message = data.json()
        this.total_message.forEach((msg)=>{
         

          msg.messages.forEach(ele_arr => {
            if(ele_arr.sendToUserId == this.userId){
                        this.profile_name = ele_arr.sendByFirstName+' '+ele_arr.sendByLastName
              
              this.vendorMsg['sendToUserId'] = ele_arr.sendByUserId
              
                       }else{
              
              
              
                       }
          });



debugger
//          if(msg.messages.sendToUserId == this.userId){
//           this.profile_name = msg.messages.sendByFirstName+' '+msg.messages.sendByLastName
// debugger
// this.vendorMsg['sendToUserId'] = msg.messages.sendByUserId

//          }else{



//          }
 
        })
      },error => 
      alert(error) // error path
    )

    // setTimeout(() => {
    //   for(var i=0;i<=$('.dateholdercontainer').length;i++)
      
    //   if($('.dateholdercontainer')[i].textContent == ""){
        
    //     $('.dateholdercontainer').remove(); 
    //   }
    // }, 2000);

    // $(".chatscroll").animate({ scrollTop: $(document).height() }, "slow");
  // return false;

  
  
  this.dScrool()

  
  }
  

    onSubmit() {
      // setTimeout(() => {
      //   $(".dropmsg").last().append('<div class""><div _ngcontent-c1 class="man_imgright"><div  _ngcontent-c1 class="exellent_parright"><pre  class="chat-content">aaaaaaaaa</pre></div></div></div>') 
 
      // }, 100);
console.log(this.vendorMsg)
this.vendorMsg['replyTo'] = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))

console.log(this.vendorMsg)
      this.vservice.message(this.vendorMsg).subscribe(( data )  =>  
      { console.log(data.json())
        this.ngOnInit();
        this.vendorMsg['message'] = ''
      },error => 
      alert(error) // error path
    )
    this.dScrool()
    
  }
   

  getTime(item){
    // RAJNEESH, 2018-10-24T18:37:50.3226299
    

    if(item.split('T')[1].split(':')[0] >= 12){
      // PM
      var time = [
        item.split('T')[1].split(':')[0]-12,
        item.split('T')[1].split(':')[1],
        ' PM',
      ]
    
     return time.join(':');
    }{
      // AM
      const time = item.split('T')[1].split('.')[0]+" AM"
      return time;
    }

  }
  getDate(item){
    // Tuesday, August 28, 2018
    // RAJNEESH, 2018-10-24T18:37:50.3226299
    // 2018-10-24 reverse
    if(this.date_old != item.split('T')[0]){
      var date = item.split('T')[0]
      this.date_old = item.split('T')[0]
      this.date_true = true;
    return date;  
    }else{
      this.date_true = false;
      return false;

    }
    
    
  }

  dScrool(){
    setTimeout(() => {
      var d = $('.chatscroll');
      d.scrollTop(d.prop("scrollHeight"));
    }, 250);
  }
}
