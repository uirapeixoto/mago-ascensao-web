import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsferaPageComponent } from './esfera-page.component';

describe('EsferaPageComponent', () => {
  let component: EsferaPageComponent;
  let fixture: ComponentFixture<EsferaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsferaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsferaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
