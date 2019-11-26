import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './services/auth/auth.interceptor';
import {AuthService} from './services/auth/auth.service';
import {AuthGuardService} from './services/auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {AddMatchDialogComponent} from './addMatch-dialog/addMatch-dialog.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {MatchService} from './services/match/match.service';
import {ArbitrateComponent} from './arbitrate/arbitrate.component';
import {MatchSocketService} from './services/sockets/match/match-socket.service';
import {UserSocketService} from './services/sockets/user/user-socket.service';
import {CustomDatePipe} from './pipes/custom-date.pipe';
import {CustomHourPipe} from './pipes/custom-hour.pipe';
import { DispatchComponent } from './dispatch/dispatch.component';

const config: SocketIoConfig = { url: 'http://localhost:8095', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDialogComponent,
    AddMatchDialogComponent,
    ArbitrateComponent,
    CustomDatePipe,
    CustomHourPipe,
    DispatchComponent
  ],
  entryComponents: [LoginDialogComponent, AddMatchDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService,
    AuthGuardService,
    MatchService,
    MatchSocketService,
    UserSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
