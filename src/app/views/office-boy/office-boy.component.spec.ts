import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBoyComponent } from './office-boy.component';

describe('OfficeBoyComponent', () => {
  let component: OfficeBoyComponent;
  let fixture: ComponentFixture<OfficeBoyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficeBoyComponent]
    });
    fixture = TestBed.createComponent(OfficeBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
