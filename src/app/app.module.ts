import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './courses-page/course/course.component';
import { ToolboxComponent } from './courses-page/toolbox/toolbox.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DeleteConfirmationComponent } from './courses-page/course/delete-confirmation/delete-confirmation.component';
import {CourseService} from './services/course.service';
import {AuthorizationService} from './services/authorization.service';
import {ModalService} from './services/modal.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './courses-page/course/edit-course/edit-course.component';
import {BorderColorDirective} from './directives/border-color.directive';
import {DurationPipe} from './pipes/duration.pipe';
import {SortingPipe} from './pipes/sorting.pipe';
import {FindPipe} from './pipes/find.pipe';
import {OutdatedPipe} from './pipes/outdated.pipe';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {CustomGuard} from './services/CustomGuard';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'courses', component: CoursesPageComponent, canActivate: [CustomGuard]},
  { path: 'courses/new', component: AddCourseComponent, canActivate: [CustomGuard]},
  { path: 'courses/:id', component: AddCourseComponent, canActivate: [CustomGuard]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    LogoComponent,
    FooterComponent,
    HeaderComponent,
    CourseComponent,
    ToolboxComponent,
    LoginPageComponent,
    DeleteConfirmationComponent,
    AddCourseComponent,
    EditCourseComponent,
    BorderColorDirective,
    DurationPipe,
    SortingPipe,
    OutdatedPipe,
    NotFoundComponent,
    FindPipe
  ],
  entryComponents: [DeleteConfirmationComponent, EditCourseComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
  ],
  providers: [AuthorizationService, CourseService, ModalService, FindPipe, CustomGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
