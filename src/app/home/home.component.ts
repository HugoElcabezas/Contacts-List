import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    //this.getContacts();
    //this.getContact();
    this.deleteContact();
  }

  getContacts() {
    this.contactService.getContacts().then((contacts) => {
      this.contacts = contacts;
    });
  }

  getContact() {
    this.contactService.getContact('69').then((contact) => {
      console.log(contact);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deleteContact() {
    this.contactService.deleteContact('69').then((res) => {
      console.log(res);
      this.getContacts();
    }).catch((error) => {
      console.log(error);
    });
  }

}
