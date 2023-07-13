import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/components/home/home.component';
import { RouterTestComponent } from './test/router-test/router-test.component';
import { SecondRouterComponent } from './test/second-router/second-router.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'router-test', component: RouterTestComponent
  },
  {
    path: 'second-router',   component: SecondRouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
