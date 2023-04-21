import { NgModule } from '@angular/core';
import { BlogComponent } from '../components/blog/blog.component';
import { HomeComponent } from '../components/home/home.component';
import { ContentComponent } from '../pages/content/content.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    FooterComponent,
    ContentComponent,
    LayoutComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
  ],
})
export class ShareModule { }
