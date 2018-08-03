import { Component, OnInit ,Input} from '@angular/core';
import swal from 'sweetalert2';
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

export class NgbdlocationModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  currentPage: string = "About"
  obj = [];
  name= 'fgdfgdfgdfgdf'
  
  ngOnInit(): void {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    //edit js
    $.getScript('./assets/js/vertical-timeline.js');

    function testAnim(x) {
      $('.modal .modal-dialog').addClass('animated');
      $('.modal .modal-dialog').addClass('bounceIn');
  };
  $('#week').on('show.bs.modal', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
  })
  $('#week').on('hide.bs.modal', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
  })
  $('#phone').on('show.bs.modal', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
  })
  $('#phone').on('hide.bs.modal', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
  })
  }
  phone(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Contact No',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            ' <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
  
  address(){
    swal({
      title: 'Add Address',
      html:
        '<input id="swal-input1" ng-model="name" class="swal2-input" placeholder="Country">' +
        '<input id="swal-input2" class="swal2-input" placeholder="City">'+
        '<input id="swal-input3" class="swal2-input" placeholder="Postalcode">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Address">' ,
      preConfirm: function () {
        return new Promise(function (resolve) {
          resolve([
            $('#swal-input1').val(),
            $('#swal-input2').val(),
            $('#swal-input3').val(),
            $('#swal-input4').val(),
            
          ])
        })
      },
      onOpen: function () {
        $('#swal-input1').focus()
      }
    }).then(function (result) {
      swal(JSON.stringify(result))
      // this.array_result = JSON.stringify(result);
      
    }).catch(swal.noop)}

  access(){
    swal({
      title: 'Add Address',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="sunday">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Monday">'+
        '<input id="swal-input3" class="swal2-input" placeholder="Tuesday">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Wednessday">'+
        '<input id="swal-input5" class="swal2-input" placeholder="Thrusday">'+
        '<input id="swal-input6" class="swal2-input" placeholder="Friday">'+
        '<input id="swal-input7" class="swal2-input" placeholder="Saturday">' ,
      preConfirm: function () {
        return new Promise(function (resolve) {
          resolve([
            $('#swal-input1').val(),
            $('#swal-input2').val(),
            $('#swal-input3').val(),
            $('#swal-input4').val(),
            $('#swal-input5').val(),
            $('#swal-input6').val(),
            $('#swal-input7').val(),
            

          ])
        })
      },
      onOpen: function () {
        $('#swal-input1').focus()
      }
    }).then(function (result) {
      swal(JSON.stringify(result))
    }).catch(swal.noop)
  }
  

  enable =  true;
  enable1 =  true;
  enable2 =  true;
  enable3 =  true;
  enable4 =  true;
  enable5 =  true;
  enable6 =  true;
  enable7 =  true;
  count = 0;
  onSubmit() { }

  onChange() {
    this.count++;
  }

 
 
  showPage(page: string) {
    this.currentPage = page;
}
//model
closeResult: string;

constructor(private modalService: NgbModal) { }

// Open default modal
open(content) {
    this.modalService.open(content).result.then((result) => {
      $(".modal-dailog").addClass( "bounceIn");
      $(".modal-dailog").addClass( "animated"); 
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
    const modalRef = this.modalService.open(NgbdlocationModalContent);
    modalRef.componentInstance.name = 'World';
}

}
