import { Component, Inject, OnInit } from '@angular/core';
import { Settings } from 'src/core/settings/settings.service';
import { SETTINGS } from 'src/core/settings/settings.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-settings-loader';

  constructor(@Inject(SETTINGS) private settings: Settings) {}

  ngOnInit() {
    this.title = `${this.settings.appName} works!`;
  }
}
