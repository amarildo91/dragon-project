import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginPageModule} from './login-page/login-page.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageModule} from './dashboard-page/dashboard-page.module';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {ErrorsModule} from './errors/errors.module';
import {NeedAuthGuard} from './auth.guard';
import {DashboardPageEditComponent} from './dashboard-page/dashboard-page-edit/dashboard-page-edit.component'
import {DashboardPageEditModule} from './dashboard-page/dashboard-page-edit/dashboard-page-edit.module';
import { UiModule } from './ui/ui.module'

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: LoginPageComponent
  },  
  { 
    path: 'dashboard-edit/:slug', 
    component: DashboardPageEditComponent,
    canActivate: [NeedAuthGuard]
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }
  
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginPageModule,
    DashboardPageModule,
    ErrorsModule,
    HttpClientModule,
    DashboardPageEditModule,
    UiModule    
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
