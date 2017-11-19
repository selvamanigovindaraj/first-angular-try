import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import{ DataService} from './data.service';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ViewusersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'create',component:AdduserComponent},
      {path:'list',component:ViewusersComponent},
      {path:'',redirectTo:'/list',pathMatch:'full'}
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
