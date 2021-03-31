import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeTemplateComponent } from './templates/home-template/home-template.component';
import { LoginTemplateComponent } from './templates/login-template/login-template.component';
import { ThemeService } from './themes/theme.service';
import { AppReducers } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeTemplateComponent,
    LoginTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({...AppReducers}, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
