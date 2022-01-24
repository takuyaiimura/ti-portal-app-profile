import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginContentComponent } from './login-content/login-content.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                component: HomepageComponent },
    { path: 'login',          component: LoginContentComponent },
    { path: 'profile',     component: ProfilePageComponent },
    //{ path: 'examples/login',       component: LoginComponent },
    // { path: 'examples/profile',     component: ProfileComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
