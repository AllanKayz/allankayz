import { Component, OnInit, HostListener } from '@angular/core';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faArrowLeft, faEnvelope, faMobileAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})

export class HomepageComponent implements OnInit {
  // Icons
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faArrowRight = faArrowRight;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  faMobileAlt = faMobileAlt;
  faBars = faBars;
  // Get Current Year
  currentYear: number = new Date().getFullYear();
  // Skills ProgressBars Values
  photoshopValue = 40;
  qgisValue = 60;
  autocadValue = 30;
  arcgisValue = 52;
  htmlValue = 80;
  cssValue = 70;
  angularValue = 60;
  jqueryValue = 65;
  leaflet = 75;
  openlayers = 60;
  pythonValue = 30;
  phpValue = 55;
  // Header
  headerVariable = false;
  header: any = document.querySelector('#header');
  browerName: string = navigator.appName;
  @HostListener('document:scroll') scrollfunction(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerVariable = true;
      console.log('Zvaita: ' + this.browerName.toString());
    }
    else {
      this.headerVariable = false;
    }
  }
  // Constructor
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}
