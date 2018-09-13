import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faquestion',
  templateUrl: './faquestion.component.html',
  styleUrls: ['./faquestion.component.scss']
})
export class FaquestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js');
  }

}
