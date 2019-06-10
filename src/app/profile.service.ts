import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private username: String;
  private clientid: String = '7cb150a9c78fbd85f452';
  private clientsecret: String = '6b87d48b7cf089a05f23a40599bb02117d527554';

  constructor(private http: Http ) {

  console.log ("service is now ready");

    this.username = "Kariuki62" ;
  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
   .map(res => res.json());
  }

getReposInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  .map(res => res.json());
}
}
