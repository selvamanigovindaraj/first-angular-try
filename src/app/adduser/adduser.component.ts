import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  errorMessage: String;
  constructor(private _dataService:DataService,
              private route:Router ) { }

  ngOnInit() {
  }
  createUser(value){
    this._dataService.createUsers(value)
    .subscribe(
      () => this.gotoview()
    )
  }
  gotoview(){
    this.route.navigateByUrl('/list')
  }
}
