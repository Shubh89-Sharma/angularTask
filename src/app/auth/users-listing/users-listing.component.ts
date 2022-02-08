import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUpdateUsersComponent } from '../add-update-users/add-update-users.component';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {


  public users: Array<any> = [];
  _subscriberData: any;

  constructor(
    private userService: AuthService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._subscriberData = this.userService.getAllUsers().subscribe((response) => {
      this.users = response.data;
    },
      error => {
        console.log(error);
      });
  }



  add() {
    const modalRef = this.modalService.open(AddUpdateUsersComponent,
      { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    modalRef.componentInstance.userEntry.subscribe((receivedEntry) => {
      let data = {
        'name': receivedEntry.employee_name,
        'age': receivedEntry.employee_age,
        'salary': receivedEntry.employee_salary,
        'profile_image': receivedEntry.profile_image
      }
      this.users.unshift(data);

    })

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this._subscriberData) {
      this._subscriberData.unsubscribe();
    }
  }


}
