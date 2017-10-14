var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import {ProjectsComponent } from '../projects/projects.component';
import {AboutComponent } from '../about/about.component';
import {ErrorComponent } from '../error/error.component';
import { ProjectService } from '../shared/project.service';

var appRoutes = [
    { path: 'detail/:id',  component: DetailComponent },
    { path: 'projects',  component: ProjectsComponent },
    { path: 'about',  component: AboutComponent },
     { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: '**', component: ErrorComponent }
    

];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavbarComponent,
            LoginComponent,
            RegisterComponent,
            HomeComponent,
            AboutComponent,
            DashboardComponent,
            ProfileComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(appRoutes),
            FlashMessagesModule
        ],
        providers: [ValidateService, AuthService, AuthGuard],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map