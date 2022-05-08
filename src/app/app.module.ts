import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LaunchComponent } from './components/launches/launch.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './components/launches/detail/detail.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CapsulelistComponent } from './components/capsules/capsulelist/capsulelist.component';
import { LaunchcardComponent } from './components/launches/launchcard/launchcard.component';
import { CapsulecardComponent } from './components/capsules/capsulecard/capsulecard.component';
import { HomeComponent } from './components/common/home/home.component';
import { CapsuleComponent } from './components/capsules/capsule/capsule.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    DetailComponent,
    FooterComponent,
    NavbarComponent,
    CapsulelistComponent,
    LaunchcardComponent,
    CapsulecardComponent,
    HomeComponent,
    CapsuleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }