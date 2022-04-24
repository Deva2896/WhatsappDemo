import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactListService } from 'src/app/_services/contact-list.service';
import { ToastrService } from 'ngx-toastr';

FormBuilder
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  loginSuccess: boolean = false;
  loginUnsuccess: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private contactService: ContactListService,
    private router: Router,
    private toastr: ToastrService) {

    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.contactService.fetchConatctList();
  }

  get form() {
    return this.loginForm.controls;
  }
  submitForm() {
    console.log(this.loginForm.value)
    let userValue = this.loginForm.value;
    let userInfo = JSON.parse(sessionStorage.getItem('loginValue') || '{}')
    if (userValue.username === userInfo.username && userValue.password === userInfo.password) {
      this.loginSuccess = true;
      setTimeout(() => {                           //<<<---using ()=> syntax
        this.loginSuccess = false;
        this.router.navigateByUrl('/home');
      }, 1000);
      // this.toastr.success('Success', 'Login Successfully');
    }
    else {
      console.log("Not Match");
      this.loginUnsuccess = true;
      setTimeout(() => {                           //<<<---using ()=> syntax
        this.loginUnsuccess = false;
      }, 3000);
      // this.toastr.success('Error', 'Login Failed');
    }
  }
  register() {
    this.router.navigateByUrl('/register');
  }


  // isMe =true
  // textMessage="hi"
  // sentTime="12-22"

}
