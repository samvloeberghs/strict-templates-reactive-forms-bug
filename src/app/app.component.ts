import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'strict-templates-reactive-forms-bug';
  middleName = new FormControl('');
  form = new FormGroup({
    name: new FormControl(''),
    firstName:  new FormControl(''),
    middleName: this.middleName
  });
}
