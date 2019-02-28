import { Component, OnInit ,Input, ViewChild, ElementRef, Renderer, Renderer2} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { taskService } from './taskService';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { debug } from 'util';
import { elementClassNamed } from '@angular/core/src/render3/instructions';
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
  `,
})

export class NgbdbookmarkModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal, public modalref: NgbModalRef) { }
}

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
  providers: [taskService, NgbActiveModal, ToastrService,Location]
})
export class BookmarkComponent implements OnInit {
  status:any;
  acc: any;
  myChecklist: any;
  filteredToDos: any;
  modalref:any;
  completedTaskTotal:number;
  completedInPercent:number;
  checklistOptions: any;
  categoriesWithCountTaskList = [];
  @ViewChild('all') all: ElementRef;
  @ViewChild('complete') complete: ElementRef;
  @ViewChild('pending') pending: ElementRef;

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

    constructor(private modalService: NgbModal,public activeModal: NgbActiveModal, public tskService: taskService, public toastr: ToastrService, public locationService: Location, private renderer: Renderer2){
            this.checklistOptions=[
            {id: 1, name: 'Category'},
            {id: 2, name: 'Events'},
            {id: 3, name: 'Photography & Vedio'},
            {id: 4, name: 'Planing'},
            {id: 5, name: 'Health & Beauty'},
            {id: 6, name: 'Others'}
        ]
        this.mychecklist();
        this.categoriesTask();
        
    }
    getTaskOptionName(id){
        return this.checklistOptions.filter(o=>o.id==id)[0]?this.checklistOptions.filter(o=>o.id==id)[0].name: 'NA';
    }
    addNewTask(obj){
         if(obj.toDoId>0){this.tskService.objTodoVm.status=2}
         debugger
         this.tskService.objTodoVm = obj;
         this.tskService.objTodoVm.status = 2;
         this.tskService.CreateUpdateTask().subscribe(res=>{ console.log(res);
            if(obj.toDoId>0){
                this.toastr.success('Task Updated Successfully !', 'Done');
            }else{
            this.toastr.success('Task Added Successfully !', 'Done');
            }
            this.mychecklist();
        });
     }
     mychecklist(){
         this.tskService.objMychecklistParam.timing ='';
         this.tskService.objMychecklistParam.categoryId = null;
         this.tskService.objMychecklistParam.filter = 0;
         this.tskService.myCheckList().subscribe(res=>{
            this.myChecklist = res;
            this.completedTaskTotal = this.myChecklist.filter(ch=>ch.status===2).length;
            this.filteredToDos = this.myChecklist;
            this.completedInPercent =this.completedTaskTotal*100/this.filteredToDos.length;
            console.log(this.myChecklist);
         });
     }

    categoriesTask(){
      this.tskService.categoriesWithCountTask().subscribe(data=>{

        this.categoriesWithCountTaskList = data;
      })
    }
    // filterByStatus(statusId){
    //     switch(statusId){
    //         case 1 :
    //             this.renderer.addClass(this.pending.nativeElement,'btn_danger');
    //             this.renderer.removeClass(this.complete.nativeElement,'btn_danger');
    //             this.renderer.removeClass(this.all.nativeElement,'btn_danger');
    //         break;
    //         case 2:
    //             this.renderer.addClass(this.complete.nativeElement,'btn_danger');
    //             this.renderer.removeClass(this.pending.nativeElement,'btn_danger');
    //             this.renderer.removeClass(this.all.nativeElement,'btn_danger');
    //         break;
    //         case 0:
    //             this.renderer.addClass(this.all.nativeElement,'btn_danger');
    //             this.renderer.removeClass(this.pending.nativeElement,'btn_danger');
    //             this.renderer.removeClass(this.complete.nativeElement,'btn_danger');
    //         break;
    //     }
    //      if(statusId==0){
    //          this.all.nativeElement.toggleClass('btn_danger');
    //          this.filteredToDos = this.myChecklist;
    //      }else{
    //         this.filteredToDos = this.myChecklist.filter(c=>c.status==statusId);
    //      }
    //      console.log(this.filteredToDos);
    //      this.status = !this.status;
    //  }
     removeTodoList(id){
        this.tskService.removeToDo(id).subscribe(res=>{
            console.log(res);
            this.toastr.success(res.message,'Done !');
            this.mychecklist();
        },error=>{
            this.toastr.error(error,'Error !');
        })
     }

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

    $(this).parent('.CheckListdiv').toggleClass('doneListdiv');
    $(this).parent('.CheckListdiv').toggleClass('donecheckbox');
    $(this).parent('.CheckListdiv').toggleClass('todocheckbox');   
});
$('.deletebtnhover').click(function(e){

    $(this).parent('.CheckListdiv').toggleClass('displaynone');
});

$('.filterbtn').click(function(e){

    $(".filterbox").toggleClass( "in");
});

$('.todobtncheck').click(function(e){

    $(".todocheckbox").show();
    $(".donecheckbox").hide();
});
$('.donebtncheck').click(function(e){

    $(".todocheckbox").hide();
    $(".donecheckbox").show();
});
$('.allbtncheck').click(function(e){

    $(".todocheckbox").show();
    $(".donecheckbox").show();
});
}
  
}
