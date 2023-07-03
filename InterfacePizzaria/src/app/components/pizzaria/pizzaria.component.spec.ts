import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzariaComponent } from './pizzaria.component';

describe('PizzariaComponent', () => {
  let component: PizzariaComponent;
  let fixture: ComponentFixture<PizzariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzariaComponent]
    });
    fixture = TestBed.createComponent(PizzariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
