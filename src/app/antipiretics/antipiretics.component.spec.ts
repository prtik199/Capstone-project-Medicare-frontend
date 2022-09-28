import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntipireticsComponent } from './antipiretics.component';

describe('AntipireticsComponent', () => {
  let component: AntipireticsComponent;
  let fixture: ComponentFixture<AntipireticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntipireticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntipireticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
