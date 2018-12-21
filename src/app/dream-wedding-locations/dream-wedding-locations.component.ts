import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-dream-wedding-locations',
  templateUrl: './dream-wedding-locations.component.html',
  styleUrls: ['./dream-wedding-locations.component.scss']
})
export class DreamWeddingLocationsComponent implements OnInit {
  dream_wedding_location = []
  constructor( private apiService: apiService) { }

  ngOnInit() {
    this.Dream_Wedding()
  }
  Dream_Wedding(){
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/dreamweddinglocation').subscribe(data => {
      console.log(data.dreamWeddingLocations)
      this.dream_wedding_location =  data.dreamWeddingLocations;
    },
      error => {
       console.log(error)
      }
    )
  }
}
