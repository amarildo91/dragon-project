import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageEditComponent } from './dashboard-page-edit.component';

describe('DashboardPageEditComponent', () => {
  let component: DashboardPageEditComponent;
  let fixture: ComponentFixture<DashboardPageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
