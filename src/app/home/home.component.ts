import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
    //this.getContact();
    //this.deleteContact();
    //this.updateContact();
    //this.addContact();
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

  updateContact() {
    const newContact = {
      id: '69',
      name: 'Edited',
      cel: '+52 1 (664) 205-1861',
      mail: 'hugo.gomezllanos@cetys.edu.mx'
    };
    this.contactService.updateContact('69', newContact).then((res) => {
      console.log(res);
      this.getContacts();
    }).catch((error) => {
      console.log(error);
    });
  }

  addContact() {
    const newContact: Contact = {
      id: '7',
      name: 'New',
      cel: '+52 1 (664) 205-1861',
      mail: 'hugo.gomezllanos@cetys.edu.mx'
    };

    this.contactService.addContact(newContact).then((res) => {
      console.log(res);
      this.getContacts();
    });
  }

}
