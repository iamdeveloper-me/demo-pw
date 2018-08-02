import { Component, OnInit , ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';
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

export class NgbduModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}
@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})




export class BusinessInfoComponent implements OnInit {
// Confirm Button Action

description(){
  swal.setDefaults({
    input: 'textarea',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    //progressSteps: ['1']
  })
  
  var steps = [
    {
      title: 'Add your Description link',
      //text: 'Chaining swal2 modals is easy'
    }
  ]
  
  swal.queue(steps).then((result) => {
    swal.resetDefaults()
  
    if (result.value) {
      swal({
        title: 'All done!',
        html:
          'Your description: <pre>' +
            JSON.stringify(result.value) +
          '</pre>',
        confirmButtonText: 'Lovely!'
      })
    }
  })
}
Pinterest(){
  swal.setDefaults({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    //progressSteps: ['1']
  })
  
  var steps = [
    {
      title: 'Add your Pinterest link',
      //text: 'Chaining swal2 modals is easy'
    }
  ]
  
  swal.queue(steps).then((result) => {
    swal.resetDefaults()
  
    if (result.value) {
      swal({
        title: 'All done!',
        html:
          'Your link: <pre>' +
            JSON.stringify(result.value) +
          '</pre>',
        confirmButtonText: 'Lovely!'
      })
    }
  })
}
Google(){

  swal.setDefaults({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    //progressSteps: ['1']
  })
  
  var steps = [
    {
      title: 'Add your Google link',
      //text: 'Chaining swal2 modals is easy'
    }
  ]
  
  swal.queue(steps).then((result) => {
    swal.resetDefaults()
  
    if (result.value) {
      swal({
        title: 'All done!',
        html:
          'Your link: <pre>' +
            JSON.stringify(result.value) +
          '</pre>',
        confirmButtonText: 'Lovely!'
      })
    }
  })
}
Instagram(){

  swal.setDefaults({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    //progressSteps: ['1']
  })
  
  var steps = [
    {
      title: 'Add your Instagram link',
      //text: 'Chaining swal2 modals is easy'
    }
  ]
  
  swal.queue(steps).then((result) => {
    swal.resetDefaults()
  
    if (result.value) {
      swal({
        title: 'All done!',
        html:
          'Your link: <pre>' +
            JSON.stringify(result.value) +
          '</pre>',
        confirmButtonText: 'Lovely!'
      })
    }
  })
}
  // Prompt Function
  promptFunction(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Facebook link',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your link: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
xyz:string = 'www.facebook.com'
xyy:string = 'www.twitter.com'
xyx:string = 'www.google.com'
zzz:string = 'www.instagram.com'
zzz1:string = 'www.Perfect.com'
busi_person:string = 'Rodriguez'
  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    $('.photogallry').hide();
  }

 
abc(event){
  console.log(event)
}
  closeResult: string;

  constructor(private modalService: NgbModal ) { }
 
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
      const modalRef = this.modalService.open(NgbduModalContent);
      modalRef.componentInstance.name = 'World';
  }
enable =  true;
enable1 =  true;
enable2 =  true;
enable3 =  true;
enable4 =  true;
  

  // count = 0;
  // onSubmit() { }

  // onChange() {
  //   this.count++;
  // }



  // enable =  true;
  // count = 0;
  // onSubmit() { }

  // onChange() {
  //   this.count++;
  // }

}



