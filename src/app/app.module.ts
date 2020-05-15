import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TestInterceptor} from './shared/interceptors/test-interceptor';
import {TestInitilizerService} from './shared/initializer/test-initilizer.service';
import {Lesson2Module} from './lesson2/lesson2.module';
import {Lesson3Module} from './lesson3/lesson3.module';
import {ToastrModule} from 'ngx-toastr';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Lesson2Module,
    Lesson3Module,
    ToastrModule.forRoot(),
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule
  ],
  providers: [
    TestInitilizerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptor,
      multi: true
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
