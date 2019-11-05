import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './components/resume/resume.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedModule
  ]
})
export class ResumeModule { }
