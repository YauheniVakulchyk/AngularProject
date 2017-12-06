import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements Course, OnInit, OnChanges { // implements OnInit {
  @Input()
  id: number;

  @Input()
  title: string;

  @Input()
  duration: number;

  @Input()
  description: string;

  @Input()
  creationDate: Date;

  @Output() someEvent = new EventEmitter<number>();

  delete() {
    this.someEvent.emit(this.id);
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
