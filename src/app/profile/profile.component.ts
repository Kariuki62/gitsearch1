import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 profile: any[];
repos: any[];

  constructor(private profileService: ProfilesService) {
     this.profileService.getUserInfo().subscribe(profile => {
       console.log(profile);
       this.profile = profile;
     });
     this.profileService.getReposInfo().subscribe(repos => {
       console.log(repos);
       this.repos = repos;
     });

  }

  ngOnInit() {
  }

}
