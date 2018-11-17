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
  constructor(public toastr: ToastrService ,public route: Router,private elRef: ElementRef, private modalService: NgbModal, private inboxService: InboxService, private hservice: MessageService) {
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.mailType === 'Inbox');
    this.message = this.inboxService.message.filter((message: Message) => message.mailId === 4)[0];
  }

  
  
  ngOnInit() {
    $.getScript('./assets/js/inbox.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    this.initDatatable(this.filter_id)


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
  
  }
  initDatatable(filter_id){
    const json ={
      "filter" : filter_id
    }      
          this.hservice.vendorMessages(json).subscribe(( data )  =>  
          { 
            this.uiLoading = false;
            this.historyArr = data.json() as string[] ; 
            console.log(this.historyArr)
          },error => 
          alert(error) // error path
        )
  }
  readMark(id){
    this.hservice.marksread(id).subscribe(( data )  =>  
    {this.toastr.success(data.json().message)
    },error => 
    alert(error) // error path
  )
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
}
