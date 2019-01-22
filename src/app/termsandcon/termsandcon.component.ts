import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-termsandcon',
  templateUrl: './termsandcon.component.html',
  styleUrls: ['./termsandcon.component.scss']
})
export class TermsandconComponent implements OnInit {

  constructor(private apiService: apiService) { }
  terme_data = {title:'' ,pageContent: ''}
  ngOnInit() {
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/pagecontent?key=term').subscribe(data => {
      console.log(data)
      this.terme_data = data;
    }, error => {
       console.log(error)
    })
  }

}

