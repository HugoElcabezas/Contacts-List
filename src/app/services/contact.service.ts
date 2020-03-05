import { Injectable } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [
    {
      id: '69',
      name: 'Hugo Sevilla Gómez Llanos',
      cel: '+52 1 (664) 205-1861',
      mail: 'hugo.gomezllanos@cetys.edu.mx'
    },
    {
      id: '666',
      name: 'Gloria Itzel Ortega Díaz',
      cel: '+ 1 (619) 389-7530',
      mail: 'itzeldiaz96@yahoo.com'
    }
  ];

  constructor() { }

  getContacts(): Promise<Contact[]> {
    return new Promise((resolve, reject) => {
      resolve(this.contacts);
    });
  }

  getContact(contactId: string): Promise<Contact> {

    return new Promise((resolve, reject) => {
      const foundContact = this.contacts.find((contact) => {
      return contact.id === contactId;
      });

      if (foundContact) {
        resolve(foundContact);
      } else {
        reject('Libro no encontrado');
      }

    });
  }

  deleteContact(contactId: string): Promise<boolean> {
    return new Promise ((resolve, reject) => {
      const remainingContacts = this.contacts.filter((contact) => {
        return contact.id !== contactId;
      });

      if (JSON.stringify(remainingContacts) !== JSON.stringify(this.contacts)) {
        this.contacts = remainingContacts;
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  updateContact(contactId: string, updatedContact: Contact): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const updatedContacts = this.contacts.map((contact) => {
        if (contact.id === contactId) {
          const newContact = {
            ...contact,
            ...updatedContact
          };
          return newContact;
        }
        return contact;
      });

      if (JSON.stringify(updatedContacts) !== JSON.stringify(this.contacts)) {
        this.contacts = updatedContacts;
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  addContact(contact: Contact): Promise<boolean> {
    return new Promise ((resolve, reject) => {
      this.contacts.push(contact);

      resolve(true);
    });
  }
}
