import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-termsandcon',
  templateUrl: './termsandcon.component.html',
  styleUrls: ['./termsandcon.component.scss']
})
export class TermsandconComponent implements OnInit {

  constructor(private apiService: apiService) { }
  terme_data = {}
  ngOnInit() {

    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/pagecontent?key=term').subscribe(data => {
      console.log(data)
      this.terme_data = data;
    }, error => {
       console.log(error)
    })
  }

}

// faqs = http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/sitefaqs
// terms and conditions = http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/pagecontent?key=term

// career = http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/pagecontent?key=career

// advertise with us = http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/pagecontent?key=advertise


