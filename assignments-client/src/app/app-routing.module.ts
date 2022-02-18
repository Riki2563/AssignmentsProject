import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'assignment-list', pathMatch: 'full' },
  { path: 'assignment-list', component:AssignmentListComponent},
  { path: 'add-assignment', component:AddAssignmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
