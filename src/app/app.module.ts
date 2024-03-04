import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { ListLinksComponent } from './components/list-links/list-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ProfileContentComponent,
    ListLinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
