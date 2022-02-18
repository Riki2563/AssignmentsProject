import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment';
import { AssignmentTime } from '../models/assignmentTime';
import { AssignmentType } from '../models/assignmentType';
import { HttpMethod, HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private m_httpService: HttpService) {

  }

  getAssignmentType(): Observable<AssignmentType[]> {
    return new Observable(observer => {
      return this.m_httpService.execute<any>("AssignmentType", HttpMethod.Get)
        .subscribe(
          res => {
            observer.next(res.result);
          });
    });
  }

  getAssignmentsTime(): Observable<AssignmentTime[]> {
    return new Observable(observer => {
      return this.m_httpService.execute<any>("AssignmentTime", HttpMethod.Get)
        .subscribe(
          res => {
            observer.next(res.result);
          });
    });
  }

  getAssignments(): Observable<Assignment[]> {
    return new Observable(observer => {
      return this.m_httpService.execute<any>("Assignment", HttpMethod.Get)
        .subscribe(
          res => {
            observer.next(res.result);
          });
    });
  }

  addAssignment(assignment: Assignment): Observable<Assignment> {
    return new Observable(observer => {
      return this.m_httpService
        .execute<Assignment>("Assignment", assignment, HttpMethod.Post)
        .subscribe(
          res => {
            observer.next(res);
          })
    });
  }

  addAssignmentTime(assignmentTime: AssignmentTime): Observable<AssignmentTime> {
    return new Observable(observer => {
      return this.m_httpService
        .execute<AssignmentTime>("AssignmentTime", assignmentTime, HttpMethod.Post)
        .subscribe(
          res => {
            observer.next(res);
          })
    });
  }

  UpdateAssignment(assignment: any): Observable<AssignmentTime> {
    return new Observable(observer => {
      return this.m_httpService
        .execute<AssignmentTime>(`AssignmentTime/${assignment.id}`, assignment, HttpMethod.Put)
        .subscribe(
          res => {
            observer.next(res);
          })
    });
  }

  deleteAssignment(id: number): Observable<any> {
    return new Observable(observer => {
      return this.m_httpService
        .execute<any>(`AssignmentTime/${id}`, null, HttpMethod.Delete)
        .subscribe(
          res => {
            observer.next(res);
          })
    });
  }

}
