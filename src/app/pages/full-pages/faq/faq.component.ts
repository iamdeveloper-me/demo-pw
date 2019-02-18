import { Component } from '@angular/core';
import { FaqService } from './faq.service';
import { FAQ } from './faq.model';
import { Object } from 'core-js/library/web/timers';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  providers: [FaqService]
})
export class FaqComponent {

  ngOnInit() {
    this.title.setTitle('Website Frequently Asked Questions | Perfect Weddings');    
    this.meta.addTag({name:'description',content:'Website Frequently Asked Questions | Perfect Weddings'});  
   
    $.getScript('http://code.jquery.com/jquery-1.6.2.js')
    $.getScript('./assets/js/removeTag.js');
  
  }
  faqs: FAQ[];

  constructor(private faqService: FaqService,private meta : Meta,private title : Title) {
    this.faqs = faqService.faqs;
  }

  filter(searchValue: string) {

    if(searchValue === '')
    {
      this.faqs = this.faqService.faqs;
    }
    else{
      this.faqs = this.faqService.faqs.filter((faqs: FAQ) => faqs.title.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 ||  faqs.content.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 );
    }   
  }

}
