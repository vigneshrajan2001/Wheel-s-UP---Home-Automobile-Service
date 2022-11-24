import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServiceprovidedComponent } from './serviceprovided/serviceprovided.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'head',component:HeaderComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'serviceprovided',component:ServiceprovidedComponent},
  {path:'about',component:AboutComponent},
  {path:'team',component:TeamComponent},
  {path:'booking',component:BookingComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'booking-list',component:BookingListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
