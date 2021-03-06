import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './welcome/welcome.component';

/* Feature Modules */
import { StudentModule } from './students/student.module';
import { TeacherModule } from './teachers/teacher.module';
import { SchoolModule } from './schools/school.module';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  imports: [
    BrowserModule,
	  NgxDatatableModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
	StudentModule,
  TeacherModule,
  SchoolModule,
  WelcomeModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

