import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-management',
  templateUrl: './contacts-management.component.html',
  styleUrls: ['./contacts-management.component.sass']
})
export class ContactsManagementComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().then((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  deleteContact(contactId: string) {
    this.contactService.deleteContact(contactId).then((result) => {
      this.getContacts();
    }).catch((error) => {
      console.log(error);
    });
  }

}
