import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelDificultadComponent } from './nivel-dificultad.component';

describe('NivelDificultadComponent', () => {
  let component: NivelDificultadComponent;
  let fixture: ComponentFixture<NivelDificultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelDificultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelDificultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
