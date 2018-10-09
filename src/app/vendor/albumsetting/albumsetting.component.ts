import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';


@Component({
  selector: 'app-albumsetting',
  templateUrl: './albumsetting.component.html',
  styleUrls: ['./albumsetting.component.scss']
})
export class AlbumsettingComponent implements OnInit {
    private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
    private album1get: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/removeimage'
    private posturl : string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/createupdatealbum'
    eventArray:any = {};
    eventArray1:any = {};
    albumArray:any = {};
    Green = 'green';
    red = 'red';
    orange = 'orange';
    teal = 'teal';
    blue = 'blue';
    brown = 'brown';
    black = 'black';
    grey = 'grey';
    white = 'white';
    pink = 'pink';
    Yellow = 'Yellow';
    purple = 'purple';
    colour:any ; 
  constructor(public http: Http) { }

  ngOnInit() {

    $.getScript('./assets/js/customizer.js');
    $.getScript('./assets/js/jscolor.js');
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
   
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    this.http.get(this.albumget,{headers:headers}).subscribe(data =>{  
        this.eventArray = data.json()
    
        console.log(this.eventArray);
        
       })



  }

  edit(data){
    this.albumArray= data;
    console.log(this.albumArray);
    alert("DSfdsff");
     
 }
 editform(a){
    
    console.log(a.value);
    let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              
            const  editdata = {
              albumsId: a.value.id,
              albumName: a.value.albumName,
              albumType: 0,
              tags: a.value.tags,
              colorTags: a.value.colorTags
            }
              console.log(editdata)
    this.http.post(this.posturl,editdata,{headers:headers}).subscribe(a =>{
    console.log(a.json());

    })


  

}

  deletevent(data,index){
  alert(data)

  var id = data.albumsId;
  console.log(id);
  this.eventArray.splice(index,1);
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
  console.log('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/removeimage?albumId'+'='+id);
  this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/removeimage?albumId'+'='+id,{headers:headers}).subscribe(data =>{

   console.log(data.json());
 
  },error =>{ console.log(error)});
  }

pinkTag(){
console.log("pink");
this.colour = "pink";
}
redTag(){
  console.log("red");
  this.colour = "red";
  }

  whiteTag(white){
    console.log("white");
    this.colour = "white";
    }

  greyTag(grey){
    console.log("grey");
    this.colour = "grey";
    }

  blackTag(black){
    console.log("black");
    this.colour = "black";
    }
  brownTag(brown){
    console.log("brown");
    this.colour = "brown";
    }
  purpleTag(purple){
    console.log("purple");
    this.colour = "purple";
    }
  blueTag(blue){
    console.log("blue");
    this.colour = "blue";
    }

  tealTag(teal){
    console.log("red");
    this.colour = "red";
    }

  greenTag(green){
    console.log("green");
    this.colour = "green";
    }

  yellowTag(yellow){
    console.log("yellow");
    this.colour = "yellow";
    }

  orangeTag(orange){
    console.log("orange");
    this.colour = "orange";
    }
}