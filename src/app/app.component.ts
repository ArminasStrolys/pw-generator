import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  // title = 'pw-generator';
  onButtonClick() {
    console.log('l', this.useLetters);
    console.log('n', this.useNumbers);
    console.log('s', this.useSymbols);
    this.password = 'PW';
  }
  OnChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }
  OnChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  OnChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }
}
