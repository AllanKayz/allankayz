import { Component, OnInit } from '@angular/core';
import { faCalendarDay, faEnvelope, faPen, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-messages',
  templateUrl: './manage-messages.component.html',
  styleUrls: ['./manage-messages.component.css']
})
export class ManageMessagesComponent implements OnInit {
  // Get Font Awesome Icons
  faCalendarDay = faCalendarDay;
  faEnvelope = faEnvelope;
  faPlus = faPlus;
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  // current date variable
  currentDate;
  // Number of new messages
  newMessages = 6;
  constructor() { }

  ngOnInit(): void {
    const dateOb: Date = new Date();
    // adjust 0 single digit date
    const date = ('0' + dateOb.getDate()).slice(-2);
    // current month
    const month = ('0' + (dateOb.getMonth() + 1)).slice(-2);
    const year = dateOb.getFullYear();
    const zuva = year + ',' + month + ',' + date;
    const zuvax = new Date(zuva);
    // date to human friendly readable format
    const mnth = zuvax.toLocaleString('default', { month: 'long' });
    const chizuva = date + ' ' + mnth + ' ' + year;
    this.currentDate = chizuva;
  }
}
