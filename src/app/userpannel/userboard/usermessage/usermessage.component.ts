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
    this.uservice.vendorHis().subscribe(( data )  =>  
      { 
        console.log("tttttttttttt");
        console.log(data.json());
        console.log("oooooooooo");
        this.historyArr = data.json() as string[] ; 
      },error => 
      alert(error) // error path
    )

  }
  // loadScript(){this.ngOnInit;}

  //   onSubmit() {   
   	  	
  //     this.uservice.message(this.userMsg).subscribe(( data )  =>  
  //     { 
  //     	console.log(data.json())
        
  //     },error => 
  //     alert(error) // error path
  //   )}
}
