import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  _lorem = `Morem ipsum PHONE_CONTACT<br> and PHONE_CONTACT_SECOND`;
  properties: Map<string, string> = new Map();

  public ngOnInit() {
    this.properties.set('PHONE_CONTACT', '9762188689');
    this.properties.set('PHONE_CONTACT_SECOND', '1800265789');
  }
}
