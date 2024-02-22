import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AboutPagesComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
