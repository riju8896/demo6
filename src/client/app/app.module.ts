import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AddModule } from './add/add.module';
import { DetailsModule} from './details/details.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AddModule, DetailsModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
