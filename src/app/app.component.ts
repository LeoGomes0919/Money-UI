import { ToastyConfig } from 'ng2-toasty';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private toastyConfig: ToastyConfig,
    private router: Router) {
    this.toastyConfig.theme = 'material';
    this.toastyConfig.position = 'top-right';
  }

  exibindoNavbar() {
    return this.router.url !== '/login';
  }
}
