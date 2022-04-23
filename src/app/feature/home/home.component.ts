import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ContactListService } from 'src/app/_services/contact-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedValue: any;
  Menu: any[] = ["Profile", "Settings", "Logout"];
  contactList: any[] = [];
  contactShow: boolean = false;
  selecteCcontact: any;
  showProfile: boolean = false;
  dummyChat: any = [{
    "from": "HI",
    "to": "Hello"
  }, {
    "from": "How are you ?",
    "to": "I am Fine"
  }]
  userInfo: any;
  selectedImageUrl: string = "";
  originalContactList: any;
  constructor(private contactService: ContactListService,
    private router: Router) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('loginValue') || '{}');
    forkJoin([this.contactService.fetchConatctList(1), this.contactService.fetchConatctList(2)]).subscribe((resp: any) => {
      console.log(resp);
      resp[0]['data'].forEach((element: any) => {
        this.contactList.push(element)
      })
      resp[1]['data'].forEach((element: any) => {
        this.contactList.push(element)
      })
      this.originalContactList = JSON.parse(JSON.stringify(this.contactList));
      console.log(this.originalContactList);
    })
    console.log(this.originalContactList);
  }
  showContact(contact: any) {
    this.selectedImageUrl = contact.avatar;
    console.log(contact)
    this.contactShow = true
    this.selecteCcontact = contact;
    this.showProfile = false;
  }

  change(evenet: any) {
    console.log(evenet);
    if (evenet.value == 'Profile') {
      console.log(this.userInfo)
      this.showProfile = true;
      this.contactShow = false;
    }
    else if (evenet.value == 'Logout') {
      sessionStorage.clear();
      this.router.navigateByUrl('/register');
    }
    else {
      this.showProfile = false;
    }
    console.log(evenet)
  }

  search(value: string) {
    if (value.length > 0)
      this.contactList = this.originalContactList.filter((element: any) => ((JSON.stringify(element.first_name).toLowerCase()).includes(value.toLowerCase()) || JSON.stringify(element.last_name).toLowerCase().includes(value.toLowerCase())))
    else
      this.contactList = JSON.parse(JSON.stringify(this.originalContactList));
  }

  sendChat(value: string) {
    this.dummyChat.push({
      from: null,
      to: value
    })
  }
}
