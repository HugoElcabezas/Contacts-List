import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsManagementComponent } from './contacts-management/contacts-management.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts/manage', component: ContactsManagementComponent},
  {path: 'contact/:contactId', component: ContactDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
