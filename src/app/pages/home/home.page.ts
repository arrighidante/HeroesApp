import { Component, inject, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
} from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { IHero } from '@data/interfaces/marvel-entity-types/heroe-interface';
import { HeroesService } from '@data/services/heroes.service';
import { IHeroSummary } from '@interfaces/heroe-summary.interface';
import { catchError, of } from 'rxjs';
import { HeroeListItemComponent } from './components/heroe-list-item/heroe-list-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonList,
    HeroeListItemComponent,
  ],
  providers: [HeroesService],
})
export class HomePage {
  private _heroesService = inject(HeroesService);
  private _router = inject(Router);
  public heroesList = signal<IHeroSummary[]>([]);
  heroesLimit = signal(20);

  ionViewWillEnter() {
    // OBS: 3) Different ways to fetch data. Uncomment the one you want to use.

    // Using Angular's HttpClient
    this.getHeroes();

    // Using Capacitor's native plugin
    // this.getHeroesCapacitor();

    // Using Capacitor's community plugin
    // this.getHeroesCCommunity();
  }

  onHeroSelected(heroId: number) {
    const selectedHero = this.heroesList().find((hero) => hero.id === heroId);
    this._router.navigate([`/hero/${heroId}`], { state: { selectedHero } });
  }

  //#region *** getHeroes different alternatives

  /** Retrieves a list of heroes using Angular's HttpClient. */
  getHeroes() {
    this._heroesService
      .getHeroes()
      .pipe(
        catchError((error) => {
          console.error('Error fetching heroes', error);
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response?.data) {
          const heroes: IHero[] = response.data.results;
          const heroesSummaryList: IHeroSummary[] =
            this.mapHerosToSummary(heroes);

          this.heroesList.set(heroesSummaryList);
        }
      });
  }

  /** Retrieves a list of heroes using Capacitor's native plugin. */
  async getHeroesCapacitor(limit?: number) {
    await this._heroesService
      .getHeroesCapacitor(limit ?? undefined)
      .then((response) => {
        if (response?.data) {
          const heroes: IHero[] = response.data.results;
          const heroesSummaryList: IHeroSummary[] =
            this.mapHerosToSummary(heroes);
          this.heroesList.set(heroesSummaryList);
        }
      })
      .catch((error) => {
        console.error('HomePage - Error al obtener los héroes:', error);
      });
  }

  /** Retrieves a list of heroes using Capacitor's community plugin. */
  async getHeroesCCommunity(limit?: number) {
    await this._heroesService
      .getHeroesCCommunity(limit ?? undefined)
      .then((response) => {
        if (response?.data) {
          const heroes: IHero[] = response.data.results;
          const heroesSummaryList: IHeroSummary[] =
            this.mapHerosToSummary(heroes);
          this.heroesList.set(heroesSummaryList);
        }
      })
      .catch((error) => {
        console.error('HomePage - Error al obtener los héroes:', error);
      });
  }

  //#endregion

  /** Maps an array of heroes to an array of hero summaries.
   * @param heroes - The array of heroes to be mapped.
   * @returns An array of hero summaries.
   */
  private mapHerosToSummary(heroes: IHero[]): IHeroSummary[] {
    return heroes.map((hero) => ({
      id: hero.id,
      name: hero.name,
      thumbnailPath: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
      comicsAvailable: hero.comics.available,
      seriesAvailable: hero.series.available,
      storiesAvailable: hero.stories.available,
    }));
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
}
