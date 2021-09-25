import { InjectionToken } from '@angular/core';
import { Settings } from './settings.service';

export const SETTINGS: InjectionToken<Settings> = new InjectionToken(
  'Settings injection token'
);
