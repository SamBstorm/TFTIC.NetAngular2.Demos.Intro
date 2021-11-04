import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/common/contact/contact.component';
import { HomeComponent } from './components/common/home/home.component';
import { MainComponent } from './components/home/main/main.component';
import { MemberComponent } from './components/home/member/member.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent, children:[
    {path:'', redirectTo:'main', pathMatch:'full'},
    {path:'main', component:MainComponent},
    {path:'member', component: MemberComponent}
  ]},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
