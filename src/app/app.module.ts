import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SettingService } from 'src/core/settings/settings.service';
import { SETTINGS } from 'src/core/settings/settings.token';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: SETTINGS,
      useFactory: (settingService: SettingService) =>
        settingService.getSettings(),
      deps: [SettingService],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (settingService: SettingService) => () =>
        settingService.loadSettings(),
      multi: true,
      deps: [SettingService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
