import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, SortEvent } from 'primeng/api';
import { CONSTANTS } from '../constants';
import { AssignmentTime } from '../models/assignmentTime';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit {

  assignments: AssignmentTime[] = [];
  CONSTANTS = CONSTANTS;

  constructor(private appService: AppService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments() {
    this.appService.getAssignmentsTime().subscribe(res => {
      this.assignments = res
    });
  }

  updateAssignment(id: number) {
    let assignment = this.assignments.find(a => a.id == id);
    if (assignment) {
      this.appService.UpdateAssignment(assignment).subscribe(res => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      })
    }
  }

  deleteAssignment(id: number) {
    this.appService.deleteAssignment(id).subscribe(res => {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      this.getAssignments();
    })
  }

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: CONSTANTS.ARE_YOU_SURE_DELETE,
      header: CONSTANTS.CONFIRMATION,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteAssignment(id)
      },
      reject: () => {
      }
    });
  }

  confirmUpdate(id: number) {
    this.confirmationService.confirm({
      message: CONSTANTS.ARE_YOU_SURE_UPDATE,
      header: CONSTANTS.CONFIRMATION,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.updateAssignment(id)
      },
      reject: () => {
      }
    });
  }

  navigateAddAssignment() {
    this.router.navigate(['add-assignment'])
  }

}
