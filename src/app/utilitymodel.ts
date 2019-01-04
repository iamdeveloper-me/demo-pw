import { Http,Headers } from '@angular/http';
export class utilities {
    construct(){
        
    }
    isValidUrl(string){
        let matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        return matcher.test(string);
      }
}