import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-termsandcon',
  templateUrl: './termsandcon.component.html',
  styleUrls: ['./termsandcon.component.scss']
})
export class TermsandconComponent implements OnInit {

  constructor(private apiService: apiService,private meta : Meta,private title : Title) { }
  terme_data = {title:'' ,pageContent: ''}
  ngOnInit() {
    this.title.setTitle('Website Terms of Use | Perfect Weddings');    
    this.meta.addTag({name:'description',content:'Website Terms of Use | Perfect Weddings'});  
    
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/pagecontent?key=term').subscribe(data => {
      console.log(data)
      this.terme_data = data;
    }, error => {
       console.log(error)
    })
  }

}

