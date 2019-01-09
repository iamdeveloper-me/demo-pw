import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MessageService } from '../../shared/service/vendor/message.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InboxService } from './inbox.service';
import { Mail, Message } from './inbox.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  providers: [InboxService]
})

export class MessageComponent implements OnInit {
   afuConfig = {
    multiple: true,
    formatsAllowed: ".jpg,.png",
    maxSize: "1",
    uploadAPI:  {
      url:"http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/ImageUploader/PortfolioUploader",
      headers: {
        "Accept"    : 'application/json, text/plain, */*',
     "Content-Type" : "application/json; charset=utf-8",
     "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqYXZlZEBtYWlsaW5hdG9yLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlZlbmRvcnMiLCJqdGkiOiIxNjMyNDNmNC05OWUyLTQ0NzAtODRjMi1hMGU1NTE0YjIyNDEiLCJpYXQiOjE1NDQ0MzYwNzUsInJvbCI6ImFwaV9hY2Nlc3MiLCJpZCI6ImUxMDQ5MGM3LWUyZjItNDg3ZS04NTZmLTQ2YTAzNWVlMTU2MiIsIm5iZiI6MTU0NDQzNjA3NSwiZXhwIjoxNTQ0NTIyNDc1LCJpc3MiOiJ3ZWJBcGkiLCJhdWQiOiJodHRwOi8vdGVzdGFwcC1lbnYudHlhZDNuNjNzYS5hcC1zb3V0aC0xLmVsYXN0aWNiZWFuc3RhbGsuY29tLyJ9.Vv49jgWmx1QOFWMleRfIiFT0tFV0_HMdIqq_-VWyiOE`
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false
  };
  loader= true
  alltab = true;
  unreadtab = false;
  startedtab = false;
  deletIcon = false;
  historyArr:string[];
  mreadArr:string[];
  // markred:string[];
  public isCollapsed = true;
  public isCollapsed1 = false;
  public isMessageSelected = true;
  closeResult: string;
  mail: Mail[];
  message: Message;
  filter_id:number = 1
  uiLoading:boolean = true;
  find_name:string;
  all_msg:number;
  unread_msg:number;
  stared_msg:number;
  myModel: any;
  form: FormGroup;
  selectedEntry = [];
  selectDelete = []
  result = []
  selectLength = 0
  arrayLength:number;
  by_default_img: '../../../assets/img/logo_icon.png'
  num:number = 0
  constructor(private formBuilder: FormBuilder,public toastr: ToastrService ,public route: Router,private elRef: ElementRef, private modalService: NgbModal, private inboxService: InboxService, private hservice: MessageService) {
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.mailType === 'Inbox');
    this.message = this.inboxService.message.filter((message: Message) => message.mailId === 4)[0];
  
  
  }
  
  imgmail = "https://image.flaticon.com/icons/svg/138/138690.svg";
  
  onSelectionChange(entry_id) {
    




if(entry_id['checked']){
  entry_id['checked'] = false;
  this.num = this.num - 1

}else{
  entry_id['checked'] = true;
  this.deletIcon = true;
  this.num = this.num + 1
  if(this.num == 0){
    this.deletIcon = false
  
  }
}

this.historyArr.forEach(ele=>{
  if(ele['checked'] == true){
   if(this.num == 0){
     this.deletIcon = false
   }
  }
  
})

if(this.num == 0){
  this.deletIcon = false
}
    // this.selectDelete.push(entry_id);
    


    // this.selectDelete.forEach(el=>{
    //   if(el == entry_id){
    //     this.selectDelete.unshift(entry_id);
    
    //    }else{
    //     this.selectDelete.push(entry_id);
    
    //    }
    // })
    
    // console.log(this.selectDelete)
}
  ngOnInit() {
    this.deletIcon = false
    $.getScript('./assets/js/inbox.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    

    if(window.location.href.indexOf('searchresult') == -1 ){
      setTimeout(() => {
        this.stared(3)
        this.unread(2)
        this.initDatatable(1)
        this.selectLength =   this.result.length
        this.initDatatable(1)
        this.arrayLength = 1;  
      }, 200);
      // this.hservice.marksread().subscribe(( data )  =>  
      //   { 
      //     console.log(data.json());
      //     console.log("jjjjjjjj");
      //     this.mreadArr = data.json() as string[] ; 
      //   },error => 
     
      // )
    
  
      //   this.hservice.markstared().subscribe(( data )  =>  
      //   { 
      //     console.log(data.json());
      //     console.log("tttttttttttttt");
      //     this.markred = data.json() as string[] ; 
      //   },error => 
     
      // )
  
     
      $(function() {
        // $("a").on("click", function() {
      
        //     $(".btn-default.active").removeClass("active");
        //     $(this).find(".btn-default").addClass("active");
        // });
  
        $(".msg_buttons").on("click", function(){
         
          $(".msg_buttons").removeClass("active");
          $(this).addClass("active");
        });
    });
    }

    
  
  }
  search(newObj){
console.log(this.find_name.toUpperCase())

console.log(this.historyArr)
// console.log(this.filter_id)
// this.filter_id = 1
const json ={
  "filter" : this.filter_id,
  "search" : this.find_name
}
this.hservice.vendorMessages(json).subscribe(( data )  =>  
          { 
            this.uiLoading = false;
            this.historyArr = data.json()  ;
            this.arrayLength =  this.historyArr.length
            this.unread_msg = this.historyArr.length;
            console.log(this.historyArr)
          },error => 
          console.log(error) 
        )

  }




  
  onBlurMethod(){
    if(this.myModel != ""){
      const json ={
        "filter" : this.filter_id,
        "search" : this.myModel
      }
      this.hservice.vendorMessages(json).subscribe(( data )  =>  
                { 
                  this.uiLoading = false;
                  this.historyArr = data.json()  ; 
                  this.unread_msg = this.historyArr.length;
                  this.arrayLength =  this.historyArr.length

                  console.log(this.historyArr)
                },error => 
                console.log(error) // error path
              )
      
    }else{
        this.ngOnInit();

    }
    
}
  initDatatable(filter_id){
    this.deletIcon = false
    this.alltab = true;
    this.unreadtab = false;
    this.startedtab = false;
    
   this.filter_id = filter_id
    const json ={
      "filter" : filter_id
    }      
          this.hservice.vendorMessages(json).subscribe(( data )  =>  
          { 
            this.uiLoading = false;
            this.historyArr = data.json()  ; 
            this.historyArr.forEach(element => {
              element['checked'] = false;

            });
            this.all_msg = this.historyArr.length;
            this.arrayLength =  this.historyArr.length
this.deletIcon = false

            console.log(this.historyArr)
            this.loader = true
          },error => 
          console.log(error) 
        )
  }
  unread(filter_id){
    this.deletIcon = false

    this.alltab = false;
    this.unreadtab = true;
    this.startedtab = false;

    this.filter_id = filter_id

    const json ={
      "filter" : filter_id
    }      
          this.hservice.vendorMessages(json).subscribe(( data )  =>  
          { 
            this.uiLoading = false;
            this.historyArr = data.json()  ; 
            this.historyArr.forEach(element => {
              element['checked'] = false;
            });
            this.unread_msg = this.historyArr.length;
            this.arrayLength =  this.historyArr.length
            this.deletIcon = false


            console.log(this.historyArr)
            this.loader = false

          },error => 
          console.log(error) // error path
        )
  }
  stared(filter_id){
    this.deletIcon = false

    this.alltab = false;
    this.unreadtab = false;
    this.startedtab = true;

    this.filter_id = filter_id

    const json ={
      "filter" : filter_id
    }      
          this.hservice.vendorMessages(json).subscribe(( data )  =>  
          { 
            this.uiLoading = false;
            this.historyArr = data.json()  ; 
            this.historyArr.forEach(element => {
              element['checked'] = false;

            });
            this.stared_msg = this.historyArr.length;
            this.arrayLength = this.historyArr.length;
            this.deletIcon = false


            console.log(this.historyArr)
            this.loader = false

          },error => 
          console.log(error) // error path
        )
  }
 
  starMark(id){
    if(this.filter_id == 3){
      this.hservice.markStar(id).subscribe(( data )  =>  
      {this.toastr.success(data.json().message)
        this.filter_id = 1
        this.stared(3)
      },error => 
      console.log(error) // error path
    )
    }else{
      this.hservice.markStar(id).subscribe(( data )  =>  
    {this.toastr.success(data.json().message)
      this.filter_id = 1
      this.ngOnInit()

    },error => 
    console.log(error) // error path
  )
    }
    
  }
  markRead(id){
    if(this.filter_id == 2){
      this.hservice.readMark(id).subscribe(( data )  =>  
      {this.toastr.success(data.json().message)
        this.filter_id = 1
        this.unread(2)
      },error => 
      console.log(error) // error path
    )
    }else{
      this.hservice.readMark(id).subscribe(( data )  =>  
      {
        // this.toastr.success(data.json().message)
        this.filter_id = 1
        this.ngOnInit()
      },error => 
      console.log(error) // error path
    ) 
    }
  }

  //inbox user list click event function
  DisplayMessage(event, mailId: number) {

    this.message = this.inboxService.message.filter((message: Message) => message.mailId.toString() === mailId.toString())[0];
    this.isMessageSelected = true;

    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.querySelectorAll('.users-list-padding > a.list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item list-group-item-action no-border');
    });
    //set active class for selected item 
    event.currentTarget.setAttribute('class', 'list-group-item list-group-item-action bg-blue-grey bg-lighten-5 border-right-primary border-right-2');

  }

  //compose popup start
  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //compose popup ends

  //inbox labels click event function
  GetEmailsByLabel(event, labelType: string) {    
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.labelType === labelType);
    this.SetItemActive(event);
  }

  //inbox type click event function
  GetEmailsByType(event, type: string) {
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.mailType === type)
    this.SetItemActive(event);
  }

  //inbox Starred click event function
  GetStarredEmails(event) {
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.isImportant === true);
    this.SetItemActive(event);
  }

  SetItemActive(event){

    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.querySelectorAll('.list-group-messages > a.list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item list-group-item-action no-border');
    });
    //set active class for selected item 
    event.currentTarget.setAttribute('class', 'list-group-item active no-border');
  }
  nextPage(id){
    this.route.navigate(['../msg' , id])
  }
  set(filter_id){
    this.filter_id = filter_id
  }

  delete(){
   this.historyArr.forEach((el)=>{
   if(el['checked']){
     this.result.push(el['messageId'])
   }
   })
   if(this.result.length != 0){
    this.hservice.delete(this.result).subscribe(( data )  =>  
    {this.toastr.success(data.json().message)
      this.deletIcon = false
        this.ngOnInit();
        
    },error => 
    console.log(error) // error path
   )
  }
   }
   


  //  Change Route for name click
  changeRoute(msg_bundle){
    if(msg_bundle['replyTo'] == 0){
      this.markRead(msg_bundle['messageId']) 
      this.route.navigate(['vendor/msg',msg_bundle['messageId']])

    }else{
      this.markRead(msg_bundle['replyTo']) 
      this.route.navigate(['vendor/msg',msg_bundle['replyTo']]) 
    }
  }
  
}
