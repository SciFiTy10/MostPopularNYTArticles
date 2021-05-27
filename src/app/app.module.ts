import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmailedComponent } from './emailed/emailed.component';
import { ArticleComponent } from './article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedComponent } from './shared/shared.component';



@NgModule({
  declarations: [
    AppComponent,
    EmailedComponent,
    ArticleComponent,
    HeaderComponent,
    MainContentComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
