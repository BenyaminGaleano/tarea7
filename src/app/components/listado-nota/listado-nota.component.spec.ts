import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNotaComponent } from './listado-nota.component';

describe('ListadoNotaComponent', () => {
  let component: ListadoNotaComponent;
  let fixture: ComponentFixture<ListadoNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
