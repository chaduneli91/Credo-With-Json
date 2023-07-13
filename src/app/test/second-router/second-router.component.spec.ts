import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRouterComponent } from './second-router.component';

describe('SecondRouterComponent', () => {
  let component: SecondRouterComponent;
  let fixture: ComponentFixture<SecondRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondRouterComponent]
    });
    fixture = TestBed.createComponent(SecondRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
