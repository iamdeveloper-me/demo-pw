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
  constructor(private formBuilder: FormBuilder,public toastr: ToastrService ,public route: Router,private elRef: ElementRef, private modalService: NgbModal, private inboxService: InboxService, private hservice: MessageService) {
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.mailType === 'Inbox');
    this.message = this.inboxService.message.filter((message: Message) => message.mailId === 4)[0];
  
  
  }
  
  imgmail = "https://image.flaticon.com/icons/svg/138/138690.svg";
  
  onSelectionChange(entry_id) {
    
    if(entry_id['checked']){
      this.deletIcon = false
      entry_id['checked'] = false;
    }else{
      this.deletIcon = true
      entry_id['checked'] = true;
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
    $.getScript('./assets/js/inbox.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    

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
    //   alert(error) // error path
    // )
  

    //   this.hservice.markstared().subscribe(( data )  =>  
    //   { 
    //     console.log(data.json());
    //     console.log("tttttttttttttt");
    //     this.markred = data.json() as string[] ; 
    //   },error => 
    //   alert(error) // error path
    // )

   
    $(function() {
      // $("a").on("click", function() {
      //   alert('gfgfgdf')
      //     $(".btn-default.active").removeClass("active");
      //     $(this).find(".btn-default").addClass("active");
      // });

      $(".msg_buttons").on("click", function(){
        // debugger
        $(".msg_buttons").removeClass("active");
        $(this).addClass("active");
      });
  });
  
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
          alert(error) // error path
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
                alert(error) // error path
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

            console.log(this.historyArr)
          },error => 
          alert(error) // error path
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

            console.log(this.historyArr)
          },error => 
          alert(error) // error path
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
            console.log(this.historyArr)
          },error => 
          alert(error) // error path
        )
  }
 
  starMark(id){
    if(this.filter_id == 3){
      this.hservice.markStar(id).subscribe(( data )  =>  
      {this.toastr.success(data.json().message)
        this.filter_id = 1
        this.stared(3)
        debugger
      },error => 
      alert(error) // error path
    )
    }else{
      this.hservice.markStar(id).subscribe(( data )  =>  
    {this.toastr.success(data.json().message)
      this.filter_id = 1
      this.ngOnInit()

    },error => 
    alert(error) // error path
  )
    }
    
  }
  markRead(id){
    if(this.filter_id == 2){
      this.hservice.readMark(id).subscribe(( data )  =>  
      {this.toastr.success(data.json().message)
        this.filter_id = 1
        this.unread(2)
        debugger
      },error => 
      alert(error) // error path
    )
    }else{
      this.hservice.readMark(id).subscribe(( data )  =>  
      {this.toastr.success(data.json().message)
        this.filter_id = 1
        this.ngOnInit()
      },error => 
      alert(error) // error path
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
      this.ngOnInit();
    },error => 
    alert(error) // error path
   )
  }
   }
   


  //  Change Route for name click
  changeRoute(id){
this.route.navigate(['vendor/msg',id])
  }
  
}
