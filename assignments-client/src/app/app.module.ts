import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { TableModule } from 'primeng/table';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    AppComponent,
    AssignmentListComponent,
    AddAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [AppService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
