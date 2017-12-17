import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {DeleteConfirmationComponent} from '../courses-page/course/delete-confirmation/delete-confirmation.component';
import {Injectable} from '@angular/core';

@Injectable()
export class ModalService {

  constructor(private ngbModalService: NgbModal) {}

  modalRef: NgbModalRef;

  open(component: Object) {
    this.modalRef =  this.ngbModalService.open(component);
  }

  setId(id: number) {
    this.modalRef.componentInstance.setValues(id);
  }

  close() {
    this.modalRef.close();
  }
}
