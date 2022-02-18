import {  Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from '../constants';
import { Assignment } from '../models/assignment';
import { AssignmentTime } from '../models/assignmentTime';
import { AssignmentType } from '../models/assignmentType';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.scss']
})
export class AddAssignmentComponent implements OnInit {

  constructor(private appService: AppService,
    private router: Router) { }

  CONSTANTS = CONSTANTS;
  assignmentTime: AssignmentTime = new AssignmentTime();
  assignment: Assignment = new Assignment();
  types: AssignmentType[] = []

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('',),
    startDate: new FormControl('', Validators.required),
    assignmentTypeId: new FormControl('', Validators.required),
    endDate: new FormControl(''),
    isRepeat: new FormControl(''),
  })

  ngOnInit(): void {
    this.assignmentTime.assignment = this.assignment;
    this.appService.getAssignmentType().subscribe(res => {
      this.types = res;
    })
  }

  saveAssignment() {
    this.appService.addAssignmentTime(this.assignmentTime).subscribe(res => {
      if (res) {
        this.router.navigate(['assignment-list']);
      }
    })
  }

  navigateAssignments() {
    this.router.navigate(['assignment-list']);
  }

}
