import { Component, OnInit ,ViewEncapsulation ,Input} from '@angular/core';
import * as tableData from '../../shared/data/smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
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

export class NgbduserModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-useraccountlist',
  templateUrl: './useraccountlist.component.html',
  styleUrls: ['./useraccountlist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UseraccountlistComponent implements OnInit {



  ngOnInit() {

$("#action").hide();
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
  
  $(".Suppliertab").click(function(){
    $("#filter").show();
    $("#action").hide();  
  
  });

    $(".Registertab").click(function(){
    $("#filter").hide();
    $("#action").show();  
  
  });
  }



  source: LocalDataSource;
  filterSource: LocalDataSource;
  alertSource: LocalDataSource;

  constructor(private modalService: NgbModal) {
      this.source = new LocalDataSource(tableData.data); // create the source
      this.filterSource = new LocalDataSource(tableData.filerdata); // create the source
      this.alertSource = new LocalDataSource(tableData.alertdata); // create the source
  }

  settings = tableData.settings;
  filtersettings = tableData.filtersettings;
  alertsettings = tableData.alertsettings;


  // And the listener code which asks the DataSource to filter the data:
  onSearch(query: string = '') {
      this.source.setFilter([
          // fields we want to inclue in the search
          {
              field: 'id',
              search: query,
          },
          {
              field: 'name',
              search: query,
          },
          {
              field: 'username',
              search: query,
          },
          {
              field: 'email',
              search: query,
          },
      ], false);
      // second parameter specifying whether to perform 'AND' or 'OR' search 
      // (meaning all columns should contain search query or at least one)
      // 'AND' by default, so changing to 'OR' by setting false here
  }

  //  For confirm action On Delete
  onDeleteConfirm(event) {
      if (window.confirm('Are you sure you want to delete?')) {
          event.confirm.resolve();
      } else {
          event.confirm.reject();
      }
  }

  //  For confirm action On Save
  onSaveConfirm(event) {
      if (window.confirm('Are you sure you want to save?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
      } else {
          event.confirm.reject();
      }
  }

  //  For confirm action On Create
  onCreateConfirm(event) {
      if (window.confirm('Are you sure you want to create?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
      } else {
          event.confirm.reject();
      }
  }
  /////////////////////////////////popupmodel

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
      const modalRef = this.modalService.open( NgbduserModalContent);
      modalRef.componentInstance.name = 'World';
  }
}
