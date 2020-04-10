import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TestInterceptor} from './shared/interceptors/test-interceptor';
import {Test2Interceptor} from './shared/interceptors/test2-interceptor';
import {initializeApp1} from './shared/initializer/test-initializer';
import {TestInitilizerService} from './shared/initializer/test-initilizer.service';
import {Lesson2Module} from './lesson2/lesson2.module';
import {Lesson3Module} from './lesson3/lesson3.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule
  ],
  providers: [
    TestInitilizerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: Test2Interceptor,
    //   multi: true
    // },
    // { provide: APP_INITIALIZER,
    //   useFactory: initializeApp1,
    //   deps: [TestInitilizerService],
    //   multi: true}
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
