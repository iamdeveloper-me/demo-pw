import { Input, Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { Router } from '@angular/router';
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
export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

}


@Component({
  selector: 'app-all-promotion-page',
  templateUrl: './all-promotion-page.component.html',
  styleUrls: ['./all-promotion-page.component.scss']
})
export class AllPromotionPageComponent implements OnInit {

    private allpromo: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/allPromotion';
    promotion = [];
    promodetail = {};
  ngOnInit() {
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
  
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    this.http.get(this.allpromo,{headers:headers}).subscribe(data =>{ data.json();
      this.promotion = data.json();
    },error => { console.log(error)});

        function myFunction() {
          var popup = document.getElementById("myPopup");
          popup.classList.toggle("show");
      }
  }
//model

closeResult: string;

constructor(private modalService: NgbModal,public http: Http,public router: Router) { }

// Open default modal
open(content,data) {
    this.promodetail = data; 
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

navigateTo() {
    this.router.navigateByUrl('/vendor/PromoteBusiness');
  }
}
