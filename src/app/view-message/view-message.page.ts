import { Component, inject, Input, OnInit } from '@angular/core';
import { IHeroSummary } from '@interfaces/heroe-summary.interface';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonToolbar,
  Platform,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
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
  ],
})
export class ViewMessagePage implements OnInit {
  @Input({ required: true }) heroe!: IHeroSummary;

  private platform = inject(Platform);

  constructor() {
    addIcons({ personCircle });
  }

  ngOnInit() {}

  getBackButtonText() {
    const isIos = this.platform.is('ios');
    return isIos ? 'Home' : '';
  }
}
