import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      document.getElementById('main-time').innerHTML = moment(new Date()).format("h:mm:ss a");
      document.getElementById('full-time').innerHTML = moment(new Date()).format("dddd, MMMM Do, YYYY");
    }, 1000);
  }

  public timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
}
