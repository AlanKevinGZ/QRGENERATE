import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrdategenerateComponent } from './qrdategenerate.component';

describe('QrdategenerateComponent', () => {
  let component: QrdategenerateComponent;
  let fixture: ComponentFixture<QrdategenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrdategenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrdategenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
