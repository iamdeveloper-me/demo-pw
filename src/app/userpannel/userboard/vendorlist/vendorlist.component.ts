import { Component, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {
  
  mySuppliers:any = {};
  allArray:any = {};
  savedArray:any = {};
  listedArray:any = {};
  bookedArray:any = {};

  constructor
  (
    private apiService : apiService,
    private toastr : ToastrService
  ) { }
  SupplierStatusObj = new MySuppliersStatusVM();
  SupplierSearchObj = new MySuppliersSearchVM();
  NotesObj = new BookmarkSuppliersVM();

  ngOnInit() {  
    this.getallSuppliers(0);
    $("li").removeClass("user");
    $("#login").hide();

                $(document).ready(function(){
                      $('.filterbtn').click(function(e){
                          $(".filterboxtik").toggleClass( "in");
                      });
                      $('.closebtn').click(function(e){
                        $(this).parent('.yikyik').addClass("hip");
                        });

                      $('.allbtn').click(function(e){
                          $(".allbox").show();
                          $(".bookedbox").hide();
                          $(".savedbox").hide();
                          $(".shortlistbox").hide();
                      });
                      $('.bookbtn').click(function(e){
                          $(".bookedbox").show();
                          $(".allbox").hide();
                          $(".savedbox").hide();
                          $(".shortlistbox").hide();
                      });
                        $('.savebtn').click(function(e){
                          $(".bookedbox").hide();
                          $(".savedbox").show();
                          $(".allbox").hide();
                          $(".shortlistbox").hide();
                      });
                        $('.shortlistbtn').click(function(e){
                          $(".bookedbox").hide();
                          $(".allbox").hide();
                          $(".savedbox").hide();
                          $(".shortlistbox").show();
                      });
                });  
  }

  getallSuppliers(enumTypeId){
      this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchmysuppliers',{
        "supplierStatus": enumTypeId
    }).subscribe(
      data => {
        this.allArray = data;
        console.log(this.allArray)
      },
      error => {
        console.log(error);
      }
    )
  }

  //Note API
  notes(item){
    console.log(item)
    this.apiService.postData(this.apiService.serverPath+'Couple/notesforsupplier',this.NotesObj).subscribe
    (
      data => {
        console.log(data);
        this.toastr.success(data.message);
      },
      error => {
        console.log(error);
        this.toastr.error(error.statusText);
      }
    )
  }

  //Supplier Status API
  changeStatus(item){
    this.NotesObj = item;
    console.log(item);
    this.apiService.postData(this.apiService.serverPath+'Couple/changesupplierstatus',this.NotesObj).subscribe
    (
      data => {
        console.log(data);
        this.toastr.success(data.message);
      },
      error => {
        console.log(error);
        this.toastr.error(error.statusText);
      }
    )
  }
  
  //Remove Supplier
  removeSupplier(item){
    this.SupplierStatusObj = item;
    console.log(item);
    this.apiService.deleteAction(this.apiService.serverPath+'Couple/removesupplier',this.SupplierStatusObj).subscribe
    (
      data => {
        console.log(data);
        this.toastr.success(data.message);
      },
      error => {
        console.log(error);
        this.toastr.error(error.statusText);
      }
    )
  }

}

//SupplierStatus All=0, Saved=1, ShortListed=2, Booked=3)
export class MySuppliersStatusVM {
  vendorId : number;
  supplierStatus : number;
}

//Search Supplier Data API
export class MySuppliersSearchVM {
  supplierStatus:number
}

//Note Supplier or Delete Supplier
export class BookmarkSuppliersVM {
  vendorId : number;
  notes :	string;
}
