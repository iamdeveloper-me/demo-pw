import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

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
    private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/';
    
    createalbum_dailog = false;

    private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
    eventArray:any = [];
    image={ path:""};
    noimage;
    defaultImage: string = "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  ngOnInit() {
    this.noimage = 'https://vignette.wikia.nocookie.net/roblox-phantom-forces/images/7/7c/Noimage.png/revision/latest?cb=20171115203949';
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
   
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    this.http.get(this.albumget,{headers:headers}).subscribe(data =>{  
        this.eventArray = data.json()
    
        console.log(this.eventArray);
       })

     
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');

    $.getScript('https://code.jquery.com/jquery-1.11.1.min.js');



  
  }
  //model

  closeResult: string;

  constructor(private modalService: NgbModal,public http: Http,public toastr: ToastrService) { }

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
createAlbum(Album){

    this.createalbum_dailog = false;

    console.log(Album);
     
    let headers = new  Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append("content-type",'application/json ');
    headers.append("Authorization",'Bearer '+authToken);

    const album = {
      albumsId: 0,
      albumName: Album.value.albumName,
      albumType: 0,
      tags: "Add tags ",
      colorTags: "Add your colour tag"
    }
    console.log(album)
  
    this.http.post(this.url+'api/Albums/createupdatealbum',album,{headers:headers})
      .subscribe(data =>{console.log(data.json()); 
        console.log(this.eventArray); 
        
        //  this.eventArray.unshift({  albumsId: data.json().id,
        //                             albumName:  Album.value.albumName,
        //                             albumType:0,
        //                             colorTags:"string",
        //                             dateAddedOn:"2018-09-25T10:50:14.6795084",
        //                             tags:"string",
        //                             updatedOn:"2018-10-02T11:09:56.5713857",
        //                           });
        

    this.http.get(this.albumget,{headers:headers}).subscribe(data =>{  
      this.eventArray = data.json()
      this.noimage = 'https://vignette.wikia.nocookie.net/roblox-phantom-forces/images/7/7c/Noimage.png/revision/latest?cb=20171115203949';
      console.log(this.eventArray);
     })
   
        
        },(error)=>{console.log(error._body);
      this.typeWarning(error._body);
  });
  }
  typeWarning(a) {
    this.toastr.warning(a);
  }


closeModel(){
       
  this.createalbum_dailog = false;

}

  //service
  albumdelete(image,index){
    swal({
      title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonClass: "btn-default",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel plx!",
    }).then((res)=>{
      console.log(res);
      if(res.value===true){

    // let con = confirm('Are you sure you want to delete this?')
    // if (con) {
      console.log(image);
      console.log(index);
      console.log(image.albumsId);
      this.eventArray.splice(index,1);
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
    
    
      // Album Getremoveevent?id'+'='+id  ?AlbumImageId'+'='+image.albumImageId
      this.http.post(this.url+'/api/Albums/deletealbum',{albumsId:image.albumsId},{headers:headers})
      .subscribe(data =>{
        console.log(data.json());
        this.toastr.success(data.json().message);
          }); 

    // }

  }else{
    // alert('Cancel Process !');
   }
  },error=>{
    alert(JSON.stringify(error));
 })
   return;

  }

}
