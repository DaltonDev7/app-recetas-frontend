import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SigninService } from './services/signin.service';
import * as fromApp from '../../state/app.state';
import * as AuthActions from 'src/app/authentication/store/auth.actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  isValidForm: boolean = false;

  constructor(
    private toast: ToastrService,
    private store: Store<fromApp.State>,
    private signInService: SigninService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      Email: [null, [Validators.email, Validators.required]],
      PassWord: [null, [ Validators.required, Validators.minLength(5)]],
    });
  }

  login() {
    this.validateForm();

    if (this.isValidForm) {
      this.store.dispatch(AuthActions.LoginStart(this.loginForm.value));
    } else {
      this.toast.error('Complete los campos requeridos');
    }
  }

  private validateForm() {
    this.isValidForm = this.loginForm.valid;
  }
}
