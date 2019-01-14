import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  carerr_data={title:"" ,pageContent:''}
  constructor(private apiService: apiService) { }

  ngOnInit() {
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/pagecontent?key=career').subscribe(data => {
      console.log(data)
      this.carerr_data = data;
    }, error => {
       console.log(error)
    })
  }

}
