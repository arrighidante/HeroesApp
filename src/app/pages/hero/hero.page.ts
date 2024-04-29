import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IHeroSummary } from '@interfaces/heroe-summary.interface';
import {
  IonBackButton,
  IonBadge,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonToolbar,
  Platform,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { idCardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonNote,
    IonBadge,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonList,
  ],
})
export class HeroPage {
  private _router = inject(Router);
  private platform = inject(Platform);

  hero = signal<IHeroSummary | undefined>(undefined);

  constructor() {
    addIcons({ idCardOutline });
    const navigation = this._router.getCurrentNavigation();
    const state = navigation?.extras.state;
    if (state) {
      const selectedHero = state['selectedHero'];
      this.hero.set(selectedHero);
    }
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios');
    return isIos ? 'Home' : '';
  }
}
