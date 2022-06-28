import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons/persons.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {

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
