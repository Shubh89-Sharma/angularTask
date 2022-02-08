import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AddUpdateUsersComponent } from './add-update-users/add-update-users.component';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddUpdateUsersComponent, UsersListingComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
