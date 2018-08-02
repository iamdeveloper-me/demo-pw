import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


export class NgbdgalleryModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

}


@Component({
  selector: 'app-albumview',
  templateUrl: './albumview.component.html',
  styleUrls: ['./albumview.component.scss']
})
export class AlbumviewComponent implements OnInit {



  ngOnInit() {

  
   $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');


      $.getScript('https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js');
    $.getScript('https://code.jquery.com/jquery-1.11.1.min.js');

   //$(document).ready(function(){
   //$(".fancybox").fancybox({
    //alert('hi');
   //    openEffect: "none",
   //    closeEffect: "none"
   //});


   
  
  }
  //model

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
      const modalRef = this.modalService.open(NgbdgalleryModalContent );
      modalRef.componentInstance.name = 'World';
  }

  
hasBaseDropZoneOver = false;
hasAnotherDropZoneOver = false;

// Angular2 File Upload
fileOverBase(e: any): void {
  this.hasBaseDropZoneOver = e;
}

fileOverAnother(e: any): void {
  this.hasAnotherDropZoneOver = e;
}

}
