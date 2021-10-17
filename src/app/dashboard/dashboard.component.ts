import { Component, OnInit } from '@angular/core';
import { faCogs, faEnvelope, faBookOpen, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Font awesome Icons
  faEnvelope = faEnvelope;
  faCogs = faCogs;
  faBookOpen = faBookOpen;
  faTachometerAlt = faTachometerAlt;
  // Other variables
  username = 'Allan Kanyemba';
  role = 'Administrator';
  rightPanelHeader = 'Dashboard';

  constructor() { }

  ngOnInit(): void {
  }

}
