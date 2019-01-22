import { Component, OnInit } from '@angular/core';
import { InboxEmailMessage, EmailService } from 'src/email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  inboxMessages:InboxEmailMessage[] = [];

  constructor(private emailService:EmailService) { }

  ngOnInit() {

    this.inboxMessages = [
      <InboxEmailMessage>{
        title:'tytul 1',
        content:'tresc1'
      },
      new InboxEmailMessage('tytul 2','tresc2'),
      new InboxEmailMessage('tytul 3','tresc3')
    ];
  }

}
