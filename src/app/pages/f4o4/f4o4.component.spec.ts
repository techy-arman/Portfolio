import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F4o4Component } from './f4o4.component';

describe('F4o4Component', () => {
  let component: F4o4Component;
  let fixture: ComponentFixture<F4o4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [F4o4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F4o4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
