import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Route } from '@angular/compiler/src/core';

declare let $: any;

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.sass']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private activatedRoute: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    const contactId = this.activatedRoute.snapshot.paramMap.get('contactId');

    this.contactService.getContact(contactId).then((contact: Contact) => {
      console.log(contact);
      this.contact = contact;
    }).catch((error) => {
      console.log(error);
      this.router.navigate(['']);
    });
  }

}
