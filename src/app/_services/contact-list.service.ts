import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  constructor(private http: HttpClient) {
  }

  fetchConatctList(page: number) {
    return this.http.get('https://reqres.in/api/users?page=' + page);
  }
}
