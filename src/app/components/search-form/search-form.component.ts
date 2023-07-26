import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  constructor(public searchService: SearchService) {}

  public get againstFormControl(): FormControl {
    return this.searchService.searchFormGroup.get('against')! as FormControl;
  }
}
