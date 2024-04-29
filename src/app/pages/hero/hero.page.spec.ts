import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeroPage } from './hero.page';

describe('ViewMessagePage', () => {
  let component: HeroPage;
  let fixture: ComponentFixture<HeroPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HeroPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
