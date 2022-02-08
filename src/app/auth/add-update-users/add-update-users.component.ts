import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-update-users',
  templateUrl: './add-update-users.component.html',
  styleUrls: ['./add-update-users.component.scss']
})
export class AddUpdateUsersComponent implements OnInit {

  @Output() userEntry: EventEmitter<any> = new EventEmitter();
  public Form: FormGroup;
  submitted = false;
  private _formObservable: any;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private userService: AuthService
  ) { this.createForm(); }

  ngOnInit() { }




  createForm() {
    this.Form = this.formBuilder.group({
      employee_name: ['', [Validators.required, Validators.pattern(/^((?!\s{2,}).)*$/)]],
      employee_age: ['', [Validators.required, Validators.pattern(/^((?!\s{2,}).)*$/)]],
      employee_salary: ['', Validators.required],
      profile_image: ['']
    });
  }
  get f() { return this.Form.controls; }

  onSubmit() {
    this.submitted = true;
    if (!this.Form.invalid) {
      this.activeModal.close();
      this.userEntry.emit(this.Form.value);
    }
  }

  uploadImage(files) {

    if (files[0].type == "image/jpg" || files[0].type == "image/jpeg" || files[0].type == "image/png") {
      this.Form.patchValue({
        profile_image: files[0].name
      })
      // this.userService.uploadImage(files[0]).subscribe((res: any) => {
      //   if (res.success) {

      //   } else {
      //     window.scrollTo(0, 0);

      //   }

      // }, err => {
      //  console.log(err)
      // });
    } else {
      alert('only png, jpeg,jpg are supportable')

    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this._formObservable) {
      this._formObservable.unsubscribe();
    }
  }

}
