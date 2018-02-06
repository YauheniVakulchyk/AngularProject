import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {DeleteConfirmationComponent} from './delete-confirmation/delete-confirmation.component';
import {ModalService} from '../../services/modal.service';
import {CourseService} from '../../services/course.service';
import {EditCourseComponent} from './edit-course/edit-course.component';

@Component({
  selector: 'app-course',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements Course, OnInit, OnChanges {

  @Input()
  id: number;

  @Input()
  name: string;

  @Input()
  duration: number;

  @Input()
  description: string;

  @Input()
  date: Date;

  @Input()
  isTopRated: boolean;

 /* @Input()
  authors": [
    {
      id: number;
      firstName: string;
      lastName: string;
    }
  ]*/

  @Input()
  length: string;

  constructor(private modalService: ModalService, private courseService: CourseService) {}

  openDeleteConfirmationWindow() {
    this.modalService.open(DeleteConfirmationComponent);
    this.modalService.setId(this.id);
  }

  openEditPage() {
    this.courseService.editCourseId.next(this.id);
    this.courseService.isAddPage.next(true);
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
  }

}
