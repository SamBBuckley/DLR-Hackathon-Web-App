import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { PoolLandingComponent } from './pool/pool-landing/pool-landing.component';
import { PoolCreateBarComponent } from './pool/pool-create-bar/pool-create-bar.component';
import { PoolModifyComponent } from './pool/pool-modify/pool-modify.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
// Styling
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PoolUpdateFormComponent } from './pool/pool-update-form/pool-update-form.component';
import { PoolCreateFormComponent } from './pool/pool-create-form/pool-create-form.component';
import { UserLandingComponent } from './user/user-landing/user-landing.component';
import { UserDeleteButtonComponent } from './user/user-delete-button/user-delete-button.component';
import { PoolDeleteButtonComponent } from './pool/pool-delete-button/pool-delete-button.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavBarComponent,
    FooterComponent,
    PoolLandingComponent,
    PoolCreateBarComponent,
    PoolModifyComponent,
    PoolUpdateFormComponent,
    PoolCreateFormComponent,
    UserLandingComponent,
    UserDeleteButtonComponent,
    PoolDeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Styling
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    // Icons
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
