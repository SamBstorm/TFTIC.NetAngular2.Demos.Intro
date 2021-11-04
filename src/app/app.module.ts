import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { HomeComponent } from './components/common/home/home.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { MainComponent } from './components/home/main/main.component';
import { MemberComponent } from './components/home/member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ContactComponent,
    MainComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
