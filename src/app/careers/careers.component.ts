import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  carerr_data={title:"" ,pageContent:''}
  constructor(private apiService: apiService,private meta : Meta, private title : Title) { }

  ngOnInit() {
    this.title.setTitle('Jobs & Career |Perfect Weddings');    
    this.meta.addTag({name:'description',content:'Jobs & Career |Perfect Weddings'});   

    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/pagecontent?key=career').subscribe(data => {
      console.log(data)
      this.carerr_data = data;
    }, error => {
       console.log(error)
    })
  }

}
