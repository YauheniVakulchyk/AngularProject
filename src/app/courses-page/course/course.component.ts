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

  @Input()
  hasStar: boolean;

  constructor(private modalService: ModalService) {}

  openDeleteConfirmationWindow() {
    this.modalService.open(DeleteConfirmationComponent);
    this.modalService.setId(this.id);
  }

  openEditWindow() {
    this.modalService.open(EditCourseComponent);
    this.modalService.setId(this.id);
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
  }

}
