import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {

  constructor(private meta:Meta) { 
    this.meta.addTag({ name: 'description', content: 'Event Title | Perfect Weddings' });

  }

  ngOnInit() {
  }

}
