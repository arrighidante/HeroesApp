import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IHeroSummary } from '@interfaces/heroe-summary.interface';
import {
  IonAvatar,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  Platform,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';

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
  @Output() heroSelected = new EventEmitter<number>();

  isIos() {
    return this.platform.is('ios');
  }

  constructor() {
    addIcons({ chevronForward });
  }

  selectHero() {
    this.heroSelected.emit(this.heroeSummary?.id);
  }
}
