import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'AngProj1';
dispName="";
dispAge="";
dispCity="";
getValues(val:any)
{
  this.dispName=val.user;
  this.dispAge=val.age;
  this.dispCity=val.city;
}
}