
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Platform, IonItem, IonLabel, IonNote, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { Message as Heroe } from '../services/data.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, IonItem, IonLabel, IonNote, IonIcon],
})
export class HeroeComponent {
  private platform = inject(Platform);
  @Input() heroe?: Heroe;
  isIos() {
    return this.platform.is('ios')
  }
  constructor() {
    addIcons({ chevronForward });
  }
}
