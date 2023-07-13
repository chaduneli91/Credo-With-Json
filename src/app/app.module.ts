import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './Footer/components/footer/footer.component';
import { HeaderComponent } from './Header/components/header/header.component';
import { RightNavContainerComponent } from './Right-nav-container/components/right-nav-container/right-nav-container.component';
import { HomeComponent } from './Home/components/home/home.component';
import { CarouselModule } from '@coreui/angular';
import { RouterTestComponent } from './test/router-test/router-test.component';
import { SecondRouterComponent } from './test/second-router/second-router.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RightNavContainerComponent,
    HomeComponent,
    RouterTestComponent,
    SecondRouterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
