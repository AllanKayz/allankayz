import { Component, OnInit, HostListener } from '@angular/core';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faTools, faEnvelope, faMobileAlt, faBars, faLaptopCode, faMapMarkedAlt, faLayerGroup, faCogs } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faArrowRight = faArrowRight;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  faMobileAlt = faMobileAlt;
  faBars = faBars;
  faTools = faTools;
  faLaptopCode = faLaptopCode;
  faMapMarkedAlt = faMapMarkedAlt;
  faLayerGroup = faLayerGroup;
  faCogs = faCogs;
  // Get Current Year
  currentYear: number = new Date().getFullYear();
  // progress spinner details
  color = 'primary';
  mode = 'determinate';
  value = [65, 50, 40];
  diameter = 250;
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
  // alert panel
  alertInformation = 'You should make sure all the required information is filled in.';
  // Header
  headerVariable = false;
  header: any = document.querySelector('#header');
  @HostListener('document:scroll') scrollfunction(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerVariable = true;
    }
    else {
      this.headerVariable = false;
    }
  }

  // Button Lets talk click event
  btnLetsTalk(): any {
    return window.location.href = 'https://wa.me/263774833890?text=Hey%20Allan,%20Just%20Viewed%20Your%20Profile%20Thought%20We%20Should%20Talk%20More';
  }
  // Button Hire Me
  btnHireMe(): any {
    return window.location.href = 'mailto:allankanyemba@gmail.com';
  }

  // Contact Form
  public sendEmail(e: Event, contactForm): any {
    e.preventDefault();

    // Check if all fields are filled
    if (!contactForm.valid) {
      return document.querySelector('.alert').classList.add('show');
    }
    // if they match send data to server
    else {
      const notification = document.querySelector('.alert').classList.remove('show');
      emailjs.sendForm('service_8oh5rci', 'template_k1iz3u8', e.target as HTMLFormElement, 'user_hHAWzMAcXONz44iFZmU1n')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          if (result.text === 'OK') {
            contactForm.reset();
            this.alertInformation = 'Message Sent Expect Reply Very Soon';
            return document.querySelector('.alert').classList.add('show');
          }
        }, (error) => {
          console.log(error.text);
          this.alertInformation = 'Try again failed to send message';
          return document.querySelector('.alert').classList.add('show');
        });
    }
  }
  // close notification btn
  closeNotification(): void {
    return document.querySelector('.alert').classList.remove('show');
  }
  // Constructor
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}

