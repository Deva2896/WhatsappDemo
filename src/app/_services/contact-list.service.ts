import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  constructor(private http: HttpClient) {
  }

  fetchConatctList() {
    this.http.get('https://reqres.in/api/users?page=2').subscribe((resp) => {
      console.log(resp)
    })
  }
}
