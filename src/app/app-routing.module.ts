import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FAQComponent } from './pages/faq/faq.component';
// import { HomeComponent } from './pages/home/home.component';
import { F4o4Component } from './pages/f4o4/f4o4.component';
import { FooterComponent } from './pages/footer/footer.component';

const routes: Routes = [
  
  {
    path:'',  
    redirectTo : 'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'footer',
    component: FooterComponent
  },
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'About',
        component:AboutComponent
      },
      {
        path:'Contact',
        component:ContactComponent
      },
      {
        path:'FAQ',
        component:FAQComponent
      },
      {
        path:'Home',
        component:DashboardComponent
      },
      {
        path:'**',
        component:F4o4Component
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
