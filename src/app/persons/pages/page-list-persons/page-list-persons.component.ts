import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from '../../services/persons.service';


@Component({
  selector: 'app-page-list-persons',
  templateUrl: './page-list-persons.component.html',
  styleUrls: ['./page-list-persons.component.css']
})
export class PageListPersonsComponent implements OnInit {

  public personCards!: string[];
  public subsciptionPersons!: Subscription;
  
  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
    this.subsciptionPersons = this.personsService.personSubject$.subscribe( (personCards: any) => {
      this.personCards = personCards;
      console.log(personCards);
    })

    this.personsService.getPersons();
  }


  ngOnDestroy(): void {
    this.subsciptionPersons.unsubscribe();
  }

}
