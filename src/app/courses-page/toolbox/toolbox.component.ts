import { Component, OnInit, NgModule } from '@angular/core';
import {DeleteConfirmationComponent} from '../course/delete-confirmation/delete-confirmation.component';
import {ModalService} from '../../services/modal.service';
import {AddCourseComponent} from '../../add-course/add-course.component';
import {CourseService} from '../../services/course.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {


  searchText: string;

  constructor(private modalService: ModalService, private courseService: CourseService) {}

  open() {
   // this.modalService.open(AddCourseComponent);
   this.courseService.setIsAddPage(true, null);
  }

  ngOnInit() {
  }

  findItem() {
    this.courseService.setSearchTest(this.searchText);
  }

}
