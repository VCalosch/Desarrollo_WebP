import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocorristaVistaComponent } from './socorrista-vista.component';

describe('SocorristaVistaComponent', () => {
  let component: SocorristaVistaComponent;
  let fixture: ComponentFixture<SocorristaVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocorristaVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocorristaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
