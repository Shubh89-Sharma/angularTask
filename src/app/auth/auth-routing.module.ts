import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { AddUpdateUsersComponent } from './add-update-users/add-update-users.component';

const routes: Routes = [
  {
		path: 'listing',
		component: UsersListingComponent
	},
	{
		path: 'add',
		component: AddUpdateUsersComponent
	},
	{path:'', redirectTo:'listing'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
