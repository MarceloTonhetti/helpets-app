import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdoptionsComponent } from './admin-adoptions.component';

describe('AdminAdoptionsComponent', () => {
  let component: AdminAdoptionsComponent;
  let fixture: ComponentFixture<AdminAdoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
