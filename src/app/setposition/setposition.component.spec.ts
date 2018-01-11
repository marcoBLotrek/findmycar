import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpositionComponent } from './setposition.component';

describe('SetpositionComponent', () => {
  let component: SetpositionComponent;
  let fixture: ComponentFixture<SetpositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
