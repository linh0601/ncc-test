import { NgModule } from '@angular/core';
import { BlogComponent } from '../components/blog/blog.component';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from '../pages/sidenav/sidenav.component';
import { HeaderComponent } from '../pages/header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    BlogComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
})
export class ShareModule { }
