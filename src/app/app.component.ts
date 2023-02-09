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
  passwordLength = 0;

  // title = 'pw-generator';
  onButtonClick() {
    // console.log('l', this.useLetters);
    // console.log('n', this.useNumbers);
    // console.log('s', this.useSymbols);
    // console.log('PW l', this.passwordLength);
    // this.password = 'PW';
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnoprstuvzxwq';
    const symbols = '!~@#$%^&*()-=+-*/.,';

    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPW = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPW += validChars[index];
    }
    this.password = generatedPW;
    console.log(this.passwordLength);
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
  OnChangeLength(value: Event) {
    const target = value.target as HTMLInputElement;
    // const parsedValue = parseInt(value);
    !isNaN(+target.value) && (this.passwordLength = +target.value);
    // if (!isNaN(parsedValue)) {
    // this.passwordLength = parsedValue;
  }
}
