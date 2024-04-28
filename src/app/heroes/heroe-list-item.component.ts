
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Platform, IonItem, IonLabel, IonNote, IonIcon, IonAvatar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { IHeroSummary } from '@interfaces/heroe-summary.interface';

@Component({
  selector: 'app-heroe-item',
  templateUrl: './heroe-list-item.component.html',
  styleUrls: ['./heroe-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, IonItem, IonLabel, IonNote, IonIcon, IonAvatar],
})
export class HeroeListItemComponent {
  private platform = inject(Platform);
  @Input() heroeSummary?: IHeroSummary;

  isIos() {
    return this.platform.is('ios')
  }
  constructor() {
    addIcons({ chevronForward });
  }
}
