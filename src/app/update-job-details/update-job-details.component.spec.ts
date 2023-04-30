import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobDetailsComponent } from './update-job-details.component';

describe('UpdateJobDetailsComponent', () => {
  let component: UpdateJobDetailsComponent;
  let fixture: ComponentFixture<UpdateJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJobDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
