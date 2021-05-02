import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemPageComponent } from './personagem-page.component';

describe('PersonagemPageComponent', () => {
  let component: PersonagemPageComponent;
  let fixture: ComponentFixture<PersonagemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
