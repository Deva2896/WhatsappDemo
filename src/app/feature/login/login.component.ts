import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactListService } from 'src/app/_services/contact-list.service';
FormBuilder
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private contactService: ContactListService,
    private router: Router) {

    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("Hello");
    this.contactService.fetchConatctList();
  }

  get form() {
    return this.loginForm.controls;
  }
  submitForm() {
    console.log(this.loginForm.value)
  }
  register() {
    this.router.navigateByUrl('/register')
  }
}
