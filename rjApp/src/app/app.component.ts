import {Component, OnInit} from '@angular/core';
import {AppConstants} from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'rjApp';
  appId: number;

  constructor(private appConstants: AppConstants) {}

  ngOnInit() {
    console.log('Great Success;');
  }

  appChanged() {
    console.log(this.appId);
  }

  changeId(appId: number) {
    this.appId = appId;
  }
}
