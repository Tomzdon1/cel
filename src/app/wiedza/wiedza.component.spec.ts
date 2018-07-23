import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiedzaComponent } from './wiedza.component';

describe('WiedzaComponent', () => {
  let component: WiedzaComponent;
  let fixture: ComponentFixture<WiedzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiedzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiedzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
