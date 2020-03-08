import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPuntuacionesComponent } from './lista-puntuaciones.component';

describe('ListaPuntuacionesComponent', () => {
  let component: ListaPuntuacionesComponent;
  let fixture: ComponentFixture<ListaPuntuacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPuntuacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPuntuacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
