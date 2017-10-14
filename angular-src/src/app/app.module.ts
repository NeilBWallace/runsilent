import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {ImageserviceService} from  './services/imageservice.service';
import {ImageFilterPipe} from  './services/filter.pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { AboutComponent } from './components/about/about.component';
import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { CvComponent } from './components/cv/cv.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { ImagedetailComponent } from './imagedetail/imagedetail.component';

const appRoutes: Routes =  [

  {path:'', component: HomeComponent},
  {path:'image/:id', component: ImagedetailComponent}, 
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'cv', component: CvComponent },
  {path:'about', component: AboutComponent },
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'',redirectTo:"/gallery",pathMatch:'full'}
  
]

@NgModule({
  declarations: [
    ImageFilterPipe,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    CvComponent,
    AboutComponent,
 ProjectsComponent,
 ImageComponentComponent,
 ImagedetailComponent
  ],
  imports: [
  
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AlertModule.forRoot()
  ],
  providers: [ImageFilterPipe,ValidateService, AuthService, AuthGuard,AlertModule,ImageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
