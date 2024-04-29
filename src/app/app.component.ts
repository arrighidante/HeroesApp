import { Component, inject } from '@angular/core';
import { Device } from '@capacitor/device';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private _platform = inject(Platform);
  private _translateService = inject(TranslateService);

  constructor() {
    this._translateService.setDefaultLang('es');
    this.initApp();
  }

  initApp() {
    this._platform.ready().then(async () => {
      const language = await Device.getLanguageCode();
      if (language?.value) {
        this._translateService.use(language.value);
      }
      console.log('Device language: ', language?.value);
    });
  }
}
