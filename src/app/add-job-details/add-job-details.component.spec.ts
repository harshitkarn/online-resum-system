import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobDetailsComponent } from './add-job-details.component';

describe('AddJobDetailsComponent', () => {
  let component: AddJobDetailsComponent;
  let fixture: ComponentFixture<AddJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
