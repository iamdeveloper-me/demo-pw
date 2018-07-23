import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';


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
  count = 0;
  onSubmit() { }

  onChange() {
    this.count++;
  }

 
 
  showPage(page: string) {
    this.currentPage = page;
}



}
