import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  currentPage: string = "About"
  constructor() { }

  ngOnInit(): void {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    //edit js
    $.getScript('./assets/js/vertical-timeline.js');
  $.getScript('./assets/js/profile.js');

  $('#navmenu').hide();
  }


  enable = true;
  count = 0;
  onSubmit() { }

  onChange() {
    this.count++;
  }

 
  showPage(page: string) {
    this.currentPage = page;
}



}
