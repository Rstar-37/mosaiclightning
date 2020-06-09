import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavList = [{
    display: "Home",
    navigation: "home"
  }, {
    display: "Contact Us",
    navigation: "contact-us"
  }]
  showFiller = false;
  constructor(private route: Router, private activeRoute: ActivatedRoute) { }
  navigated(navigation: string) {
    console.log(this.route.getCurrentNavigation());
    console.log(this.activeRoute)

  }
}
