import { Component, OnInit, NgModule } from '@angular/core';
import {DeleteConfirmationComponent} from '../course/delete-confirmation/delete-confirmation.component';
import {ModalService} from '../../services/modal.service';
import {AddCourseComponent} from './add-course/add-course.component';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  item: string;

  constructor(private modalService: ModalService) {}

  open() {
    this.modalService.open(AddCourseComponent);
  }

  ngOnInit() {
  }

  findItem() {
    console.log(this.item);
  }

}
