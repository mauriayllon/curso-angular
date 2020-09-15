import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from 
'@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  
  {path:'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  
  {path:'pages', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    MatSliderModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppModule { } 
