import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ViewMessagePage } from '../view-message/view-message.page';

import { HeroeComponent } from './heroe.component';

describe('MessageComponent', () => {
  let component: HeroeComponent;
  let fixture: ComponentFixture<HeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeComponent, ViewMessagePage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
