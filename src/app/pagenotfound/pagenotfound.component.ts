import { Component, OnInit } from '@angular/core';
import { faHouseDamage, faBiohazard, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  // Declare Icons
  faBiohazard = faBiohazard;
  faHouseDamage = faHouseDamage;
  faHeartBroken = faHeartBroken;

  constructor() { }

  ngOnInit(): void {
  }

}
