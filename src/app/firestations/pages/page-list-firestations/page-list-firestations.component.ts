import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestationsService } from '../../services/firestations.service';

@Component({
  selector: 'app-page-list-firestations',
  templateUrl: './page-list-firestations.component.html',
  styleUrls: ['./page-list-firestations.component.css']
})
export class PageListFirestationsComponent implements OnInit {

  public fireStationCards!: string[];
  public subsciptionFireStation!: Subscription;


  constructor(private fireStationService: FirestationsService) { }

  ngOnInit(): void {
    this.subsciptionFireStation = this.fireStationService.fireStationSubject$.subscribe((fireStationCards: any) => {
      this.fireStationCards = fireStationCards;
      console.log(fireStationCards);
      
    })
  }

}
