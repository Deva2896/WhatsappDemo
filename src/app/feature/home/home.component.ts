import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ContactListService } from 'src/app/_services/contact-list.service';
import { DummyChatClass, DummyChat } from '../models/dummy-chat';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public DummyChatClass = new DummyChatClass();
  selectedValue: any;
  Menu: any[] = ["Profile", "Settings", "Logout"];
  contactList: any[] = [];
  contactShow: boolean = false;
  selecteCcontact: any;
  showProfile: boolean = false;
  dummyChat: any[] = [];
  userInfo: any;
  selectedImageUrl: string = "";
  originalContactList: any;
  // emojis
  message: string = '';
  showEmojiPicker = false;
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]
  set = 'twitter'
  selecteCcontactId: number = 0;
  constructor(private contactService: ContactListService,
    private router: Router) { }

  ngOnInit(): void {
    this.dummyChat = DummyChat;
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
      this.originalContactList.forEach((element: any) => {
        element['chat'] = JSON.parse(JSON.stringify(this.dummyChat));
      })
      console.log(this.originalContactList);
    })
    console.log(this.originalContactList);
  }
  showContact(contact: any, index: number) {
    console.log(index);
    this.selecteCcontactId = index;
    this.dummyChat = this.originalContactList[index]['chat'];
    this.selectedImageUrl = contact.avatar;
    console.log(contact)
    this.contactShow = true
    this.selecteCcontact = contact;
    this.showProfile = false;
    // this.dummyChat = this.originalContactList[this.selecteCcontactId]['chat'];
    console.log(this.dummyChat);
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
    this.originalContactList[this.selecteCcontactId]['chat'].push({
      message: value,
      isSendByUser: true,
      time: moment().format('LT')
    })
    this.dummyChat = this.originalContactList[this.selecteCcontactId]['chat'];
    console.log(this.originalContactList);
    // this.dummyChat.push({
    //   message: value,
    //   isSendByUser: true,
    //   time: moment().format('LT')
    // })
  }
  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }
  // emoiis
  addEmoji(event: any) {
    console.log(this.message)
    const { message } = this;
    console.log(message);
    console.log(`${event.emoji.native}`)
    const text = `${message}${event.emoji.native}`;
    this.message = text;
    // document.querySelector("input").addEventListener("mouseup", function (e) {
    //   console.log("pos:", this.selectionEnd);
    // });
    // this.showEmojiPicker = false;
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur')
  }
}
