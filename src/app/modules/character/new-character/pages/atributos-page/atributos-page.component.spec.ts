import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosPageComponent } from './atributos-page.component';

describe('AtributosPageComponent', () => {
  let component: AtributosPageComponent;
  let fixture: ComponentFixture<AtributosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
