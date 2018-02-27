import { Component, OnInit, NgModule } from '@angular/core';
import {DeleteConfirmationComponent} from '../course/delete-confirmation/delete-confirmation.component';
import {ModalService} from '../../services/modal.service';
import {AddCourseComponent} from '../../add-course/add-course.component';
import {CourseService} from '../../services/course.service';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {


  searchText: string;

  constructor(private modalService: ModalService, private courseService: CourseService, private router: Router) {}

  open() {
   // this.modalService.open(AddCourseComponent);
   // this.courseService.editCourseId.next(null);
   // this.courseService.isAddPage.next(true);
    this.router.navigate(['/courses/new']);
  }

  ngOnInit() {
  }

  findItem() {
    console.log('SearchText = ' + this.searchText);
    this.courseService.searchText.next(this.searchText);
  }

}
