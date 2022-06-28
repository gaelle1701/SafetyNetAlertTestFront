import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SafetyNetAlerts_Front';

  constructor(private router: Router){
    // sert à voir la config du tableau de routes
    console.log(this.router.config);
  }

}
