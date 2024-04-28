import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ViewMessagePage } from '../view-message/view-message.page';

import { HeroeListItemComponent } from './heroe-list-item.component';

describe('MessageComponent', () => {
  let component: HeroeListItemComponent;
  let fixture: ComponentFixture<HeroeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeListItemComponent, ViewMessagePage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
