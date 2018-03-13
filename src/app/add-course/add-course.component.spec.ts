import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  it('name invalid when empty', () => {
    const name = component.myForm.controls['name'];
    expect(name.valid).toBeFalsy();
  });

  it('description invalid when empty', () => {
    const description = component.myForm.controls['description'];
    expect(description.valid).toBeFalsy();
  });

  it('duration invalid when empty', () => {
    const duration = component.myForm.controls['duration'];
    expect(duration.valid).toBeFalsy();
  });

  it('date invalid when empty', () => {
    const date = component.myForm.controls['date'];
    expect(date.valid).toBeFalsy();
  });

  it('name invalid when more than max text', () => {
    const name = component.myForm.controls['name'];
    name.setValue('qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm');
    expect(name.valid).toBeFalsy();
  });

  it('name validation', () => {
    const name = component.myForm.controls['name'];
    name.setValue('test');
    expect(name.valid).toBeTruthy();
  });

  it('description validation', () => {
    const description = component.myForm.controls['description'];
    description.setValue('test');
    expect(description.valid).toBeTruthy();
  });
});
