import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

export type Settings = { appName: string; production: boolean };

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  public settings: { appName: string } | undefined;

  loadSettings() {
    return of({ appName: 'Settings Sample', production: false }).pipe(
      delay(5000),
      tap((x) => (this.settings = x))
    );
  }

  getSettings() {
    return this.settings;
  }
}
