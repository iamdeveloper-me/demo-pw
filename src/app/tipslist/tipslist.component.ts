import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tipslist',
  templateUrl: './tipslist.component.html',
  styleUrls: ['./tipslist.component.scss']
})
export class TipslistComponent implements OnInit {

  constructor(private meta : Meta, private title : Title) { }

  ngOnInit() {
    this.title.setTitle('Wedding Tips & Articles | Perfect Weddings');    
    this.meta.addTag({name:'description',content:'Wedding Tips & Articles |Perfect Weddings'});  
  }


}
