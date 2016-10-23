import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  commits: Array<any>;

  constructor(public navCtrl: NavController, private http: Http) {
    
  }

ngOnInit() {
  this.http.get('https://api.github.com/repos/driftyco/ionic/commits')
    .map(response => response.json())
    .subscribe( commits => {
      this.commits = commits;
    });
}

}
