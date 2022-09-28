import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsuccessComponent } from './rsuccess.component';

describe('RsuccessComponent', () => {
  let component: RsuccessComponent;
  let fixture: ComponentFixture<RsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
