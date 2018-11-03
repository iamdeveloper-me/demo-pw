import { Component, OnInit ,Input} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

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

export class NgbdbookmarkModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }

}


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
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
        const modalRef = this.modalService.open(NgbdbookmarkModalContent);
        modalRef.componentInstance.name = 'World';
    }


  ngOnInit() {
    $("li").removeClass("user");
    $("#login").hide();
$.getScript('https://code.jquery.com/jquery-1.11.1.min.js');
    $(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
    if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
})
$('.tikchecklist').click(function(e){
//alert("hi")
    $(this).parent('.CheckListdiv').toggleClass('doneListdiv');
    $(this).parent('.CheckListdiv').toggleClass('donecheckbox');
    $(this).parent('.CheckListdiv').toggleClass('todocheckbox');   
});
$('.deletebtnhover').click(function(e){
//alert("hi")
    $(this).parent('.CheckListdiv').toggleClass('displaynone');
});

$('.filterbtn').click(function(e){
//alert("hi")
    $(".filterbox").toggleClass( "in");
});

$('.todobtncheck').click(function(e){
//alert("hi")
    $(".todocheckbox").show();
    $(".donecheckbox").hide();
});
$('.donebtncheck').click(function(e){
//alert("hi")
    $(".todocheckbox").hide();
    $(".donecheckbox").show();
});
$('.allbtncheck').click(function(e){
//alert("hi")
    $(".todocheckbox").show();
    $(".donecheckbox").show();
});



  }




}
