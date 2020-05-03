import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() searchInput;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmitForm(ngForm: NgForm) {
    const search = ngForm.value.search;
    this.router.navigate([`/${search}`]);
  }
}
