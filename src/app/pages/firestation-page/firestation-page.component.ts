import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestationsService } from 'src/app/services/firestations/firestations.service';

@Component({
  selector: 'app-firestation-page',
  templateUrl: './firestation-page.component.html',
  styleUrls: ['./firestation-page.component.css']
})
export class FirestationPageComponent implements OnInit {

  public fireStationCards!: string[];
  public subscriptionFireStations!: Subscription;

  constructor(private fireStationService: FirestationsService) { }

  ngOnInit(): void {
    this.subscriptionFireStations = this.fireStationService.firestationSubject$
  }

}
