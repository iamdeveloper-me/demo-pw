import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
fname = "Vega";
lname = "Armoogum";
pno = "9826812185";
email = 'hdh@gmail.com' ;
site = 'dbshjf.com' ;
about = 'dhcfhkjcklsjnvklifhjvfjnjfhgfn';
payment = '12$';
 constructor() { }

  ngOnInit() {   
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
  }

}
