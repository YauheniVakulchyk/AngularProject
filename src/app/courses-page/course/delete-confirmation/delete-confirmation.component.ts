import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CourseService} from '../../../services/course.service';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  courseId: number;

  constructor(private courseService: CourseService) {}

  // @Output() someEvent = new EventEmitter<number>();

  setValues(id: number) {
    this.courseId = id;
  }

  delete() {
    console.log('delete');
    this.courseService.deleteCourse(this.courseId);
  }

  close() {
    this.courseService.closeWindow();
  }

  ngOnInit() {
  }

}
