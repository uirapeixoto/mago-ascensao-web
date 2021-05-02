import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagensPageComponent } from './vantagens-page.component';

describe('VantagensPageComponent', () => {
  let component: VantagensPageComponent;
  let fixture: ComponentFixture<VantagensPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VantagensPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
