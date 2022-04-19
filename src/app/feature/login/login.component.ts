import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/_services/contact-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private contactService: ContactListService) { }

  ngOnInit(): void {
    console.log("Hello");
    this.contactService.fetchConatctList();
  }

}
