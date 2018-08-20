import {Input, Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary btn-raised" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
})
export class NgbdpromotbusinessModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

}

@Component({
  selector: 'app-promote-business',
  templateUrl: './promote-business.component.html',
  styleUrls: ['./promote-business.component.scss']
})
export class PromoteBusinessComponent implements OnInit {

//accordian
 acc: any;
  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };
  

  ngOnInit() {
   $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');



    $(".close").click(function(){
        $(".alert").hide();
     });

     $(".gallery").click(function(){
        $(".homegallerybox").show();
        $(".prioritybox").hide();
        $(".audiencebox").hide();
        $(".dealsbox").hide();
        $(".homebannerbox").hide();
     });
      $(".priority").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").show();
        $(".audiencebox").hide();
        $(".dealsbox").hide();
        $(".homebannerbox").hide();
     });
      $(".audience").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").hide();
        $(".audiencebox").show();
        $(".dealsbox").hide();
        $(".homebannerbox").hide();
     });
      $(".deals").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").hide();
        $(".audiencebox").hide();
        $(".dealsbox").show();
        $(".homebannerbox").hide();
     });
      $(".homebanner").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").hide();
        $(".audiencebox").hide();
        $(".dealsbox").hide();
        $(".homebannerbox").show();
     });


  }

  closeResult: string;

constructor(private modalService: NgbModal) { }

// Open default modal
open(content) {
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

// This function is used in open
private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
}

// Open modal with dark section
openModal(customContent) {
    this.modalService.open(customContent, { windowClass: 'dark-modal' });
}

// Open content with dark section
openContent() {
    const modalRef = this.modalService.open( NgbdpromotbusinessModalContent);
    modalRef.componentInstance.name = 'World';
}



}
