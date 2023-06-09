import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './share/layout/layout.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
