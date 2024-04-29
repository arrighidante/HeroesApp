import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeroPage } from '../../../hero/hero.page';

import { HeroeListItemComponent } from './heroe-list-item.component';

describe('MessageComponent', () => {
  let component: HeroeListItemComponent;
  let fixture: ComponentFixture<HeroeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeListItemComponent, HeroPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
