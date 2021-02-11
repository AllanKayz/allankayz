import { Component, OnInit } from '@angular/core';
import { faArrowRight, faArrowLeft, faEnvelope, faMobileAlt, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username = 'Allan Kanyemba';
  role = 'Administrator';

  constructor() { }

  ngOnInit(): void {
  }

}
