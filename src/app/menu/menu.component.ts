import { TemplateRef } from '@angular/core';
import { Component,  OnInit , Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {


    ngOnInit() {    
        // $.getScript('./assets/register/js/jquery-2.2.4.min.js');
        // $.getScript('./assets/register/js/bootstrap.min.js');
    $(".tik").click(function(){
        //alert("1")
        $(".navbar-collapse").addClass("in");
        $(".navbar-toggler").addClass("navbtntik");
        $(".navbar-toggler").removeClass("tik");
        $(".slidemenu").addClass("inslide");  
    });

    $(".navbtntik").click(function(){
        alert("1")  
    });
        
    $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $(".headernav").addClass("head_small")
    } else {
        $(".headernav").removeClass("head_small")
    }
});

    
    }

    constructor(  private modalService: NgbModal) {}
  closeResult: string;
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
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
  }


}
