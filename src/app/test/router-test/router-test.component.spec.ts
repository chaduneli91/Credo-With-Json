import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestComponent } from './router-test.component';

describe('RouterTestComponent', () => {
  let component: RouterTestComponent;
  let fixture: ComponentFixture<RouterTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterTestComponent]
    });
    fixture = TestBed.createComponent(RouterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
