import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  ngOnInit() {
  }
    // Define a users property to hold our user data
    users: Array<any>;
    
      // Create an instance of the DataService through dependency injection
      constructor(private _dataService: DataService) {
    
        // Access the Data Service's getUsers() method we defined
        this._dataService.getUsers()
            .subscribe(res => this.users = res);
      }

}
