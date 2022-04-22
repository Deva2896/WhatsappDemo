import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/_services/contact-list.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  concatList: any;
  constructor(private contactService: ContactListService) { }

  ngOnInit(): void {
    this.contactService.fetchConatctList().subscribe(resp => {
      console.log(resp)
      this.concatList = resp;
      console.log(this.concatList.data)
      this.concatList = this.concatList.data
    })
  }

}
