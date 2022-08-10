import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbersComponent } from './plumbers.component';

describe('PlumbersComponent', () => {
  let component: PlumbersComponent;
  let fixture: ComponentFixture<PlumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
