import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup
  constructor(
    private router: Router,
    private _formBuilder: FormBuilder
  ) {
    this.registerForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$")]],
      phone: ['', [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'), Validators.minLength(10), Validators.maxLength(10)]],
      country: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    console.log("hiiiiiiiiiiiiiiiiiiiii")
  }
  submitForm() {
    console.log(this.registerForm.value)
    sessionStorage.setItem("loginValue", JSON.stringify(this.registerForm.value));
    this.router.navigateByUrl('/')
  }
  get form() {
    return this.registerForm.controls;
  }
}
