import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasPopularesComponent } from './recetas-populares.component';

describe('RecetasPopularesComponent', () => {
  let component: RecetasPopularesComponent;
  let fixture: ComponentFixture<RecetasPopularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetasPopularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
