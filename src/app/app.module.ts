import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './courses-page/course/course.component';
import { LoginComponent } from './logo/login/login.component';
import { LogoffComponent } from './logo/logoff/logoff.component';
import { ToolboxComponent } from './courses-page/toolbox/toolbox.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    LogoComponent,
    FooterComponent,
    HeaderComponent,
    CourseComponent,
    LoginComponent,
    LogoffComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
