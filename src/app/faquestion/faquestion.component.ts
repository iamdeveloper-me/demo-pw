import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-faquestion',
  templateUrl: './faquestion.component.html',
  styleUrls: ['./faquestion.component.scss']
})
export class FaquestionComponent implements OnInit {
  content_data = [];
  constructor(private apiService: apiService) { }
  ngOnInit() {
    this.faq();
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js');
  }
  faq(){
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/sitefaqs').subscribe(data => {
      this.content_data =data;
      console.log(data)
    }, error => {
       console.log(error)
    })
  }
}
