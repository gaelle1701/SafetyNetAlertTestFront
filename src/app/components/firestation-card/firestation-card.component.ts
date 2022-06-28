import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestationsService } from 'src/app/services/firestations/firestations.service';

@Component({
  selector: 'app-firestation-card',
  templateUrl: './firestation-card.component.html',
  styleUrls: ['./firestation-card.component.css']
})
export class FirestationCardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
   
  }

}
