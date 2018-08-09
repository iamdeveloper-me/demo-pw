import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  currentPage: string = "About"
  obj = [];
  name= 'fgdfgdfgdfgdf'
  Country = 'India'; 
  District = 'Delhi';
  StreetAddress = '12, Park Street road';
  phone1 = '0731-666666';
  phone2 = '0731-555555';
  phone3 = '1234567890';
  Sunday = 'Closed';
  Mondayopen = '9:00' ;Mondayclose = '5:00';
  Tuesdayopen= '9:00' ;Tuesdayclose= ' 5:00';
  Webnesdayopen ='9:00';Webnesdayclose ='5:00';
  Thursdayopen = '9:00';Thursdayclose = '5:00';
  Fridayopen =  '9:00';Fridayclose=  '5:00';
  Saturday = 'Closed';
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
  $('#address').on('show.bs.modal', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
  })
  $('#address').on('hide.bs.modal', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
  })
  }


  enable =  true;
  enable1 =  false;
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

}
