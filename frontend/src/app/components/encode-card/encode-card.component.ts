import {Component, Input} from '@angular/core';
import axios from "axios";


@Component({
  selector: 'app-encode-card',
  templateUrl: './encode-card.component.html',
  styleUrls: ['./encode-card.component.css']
})
export class EncodeCardComponent {
  @Input() input = '';
  @Input() output = '';
  @Input() losungswort = '';
  @Input() title = '';
  showError: boolean = false;

  constructor() {}


  copyText(): void {
    const textField = document.getElementById('output') as HTMLTextAreaElement;
    textField.select();
    document.execCommand('copy');
  }

  async encodeMessage() {
    this.showError = false;

    try {
      const response = await axios.post('http://localhost:3000/crypto/encode',{
        rawLosungswort: this.losungswort,
        rawInput: this.input
      })
      this.output = response.data;
    } catch (exception) {
      this.showError = true;
    }
  }

}
