import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CharactersService } from 'src/app/services/characters.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters: any;
  pagination: any;
  pageEvent: any;
  
  filterSelected: any = 0;
  pageIndex: any = 0;
  
  formGroup: FormGroup = this.formBuilder.group({
    name: [''],
    type: [''],
  })

  constructor(
    private readonly charactersService: CharactersService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(data: any = null) {
    this.charactersService.getCharacters(data)
      .subscribe(
        (response: any) => {
          this.allCharacters = response.results;
          this.pagination = {
            count: response.info.count,
            pageSize: response.results.length,
          }
        }
      )
  }
 
  pageNavigations(event?: any) {
    this.pageIndex = event ? event.pageIndex : this.pageIndex;

    this.getCharacters([{params: "page", value: this.pageIndex + 1}]); 
  }

  search() {
    let data = [{
      params: this.formGroup.get('type')?.value,
      value: this.formGroup.get('name')?.value
    }];

    this.getCharacters(data); 
  }
}
