import { Http,Headers } from '@angular/http';
import { Component } from '@angular/core';

//Declarations
declare var require: any;
const data: any = require('../../shared/data/company.json');

@Component({
  selector: 'app-dt-paging',
  templateUrl: './dt-paging.component.html',
  styleUrls: ['./dt-paging.component.scss']
})

export class DTPagingComponent {
  rows = [];

  constructor(public http: Http) {
    var data = {
      "page": 1, 
      "pageSize": 10,
      // "sortDir": 'asc',
      // "sortedBy": '',
      // "searchQuery": '',
      // "status": this.optionSelected
    }

  this.http.post("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/myreviews", data, { headers: this.header() }).subscribe(
      data =>{
        // this.countryArray = data.json()
        this.rows = [
          {
              "name": "Ethel Price",
              "gender": "female",
              "company": "Johnson, Johnson and Partners, LLC CMP DDC",
              "age": 22
          },
          {
              "name": "Claudine Neal",
              "gender": "female",
              "company": "Sealoud",
              "age": 55
          },
          {
              "name": "Beryl Rice",
              "gender": "female",
              "company": "Velity",
              "age": 67
          },
          {
              "name": "Wilder Gonzales",
              "gender": "male",
              "company": "Geekko"
          },
          {
              "name": "Georgina Schultz",
              "gender": "female",
              "company": "Suretech"
          },
          {
              "name": "Carroll Buchanan",
              "gender": "male",
              "company": "Ecosys"
          },
          {
              "name": "Valarie Atkinson",
              "gender": "female",
              "company": "Hopeli"
          },
          {
              "name": "Schroeder Mathews",
              "gender": "male",
              "company": "Polarium"
          },
          {
              "name": "Lynda Mendoza",
              "gender": "female",
              "company": "Dogspa"
          },
          {
              "name": "Sarah Massey",
              "gender": "female",
              "company": "Bisba"
          },
          {
              "name": "Robles Boyle",
              "gender": "male",
              "company": "Comtract"
          },
          {
              "name": "Evans Hickman",
              "gender": "male",
              "company": "Parleynet"
          },
          {
              "name": "Dawson Barber",
              "gender": "male",
              "company": "Dymi"
          },
          {
              "name": "Bruce Strong",
              "gender": "male",
              "company": "Xyqag"
          },
          {
              "name": "Nellie Whitfield",
              "gender": "female",
              "company": "Exospace"
          },
          {
              "name": "Jackson Macias",
              "gender": "male",
              "company": "Aquamate"
          },
          {
              "name": "Pena Pena",
              "gender": "male",
              "company": "Quarx"
          },
          {
              "name": "Lelia Gates",
              "gender": "female",
              "company": "Proxsoft"
          },
          {
              "name": "Letitia Vasquez",
              "gender": "female",
              "company": "Slumberia"
          },
          {
              "name": "Trevino Moreno",
              "gender": "male",
              "company": "Conjurica"
          },
          {
              "name": "Barr Page",
              "gender": "male",
              "company": "Apex"
          },
          {
              "name": "Kirkland Merrill",
              "gender": "male",
              "company": "Utara"
          },
          {
              "name": "Blanche Conley",
              "gender": "female",
              "company": "Imkan"
          }    
      ]
        // console.log(this.row)
        // alert(this.row)
        // console.log(  this.countryArray);
        // this.c=   data.json().count;
        // this.collection = this.countryArray
        
  },error=>{
        console.log(error)
  });
  }


  header(){
    let header = new Headers();
    var authToken = localStorage.getItem('userToken');
    header.append('Accept', 'application/json')
    header.append('Content-Type', 'application/json');
    header.append("Authorization",'Bearer '+authToken);
    return header;
  }
}