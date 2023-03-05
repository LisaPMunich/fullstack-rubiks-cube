import {Component, Input} from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-decode-card',
  templateUrl: './decode-card.component.html',
  styleUrls: ['./decode-card.component.css']
})
export class DecodeCardComponent {
  @Input() input = '';
  @Input() output = '';
  @Input() losungswort = '';
  @Input() title = '';
  showError: boolean = false;


  clearText(): void{
    this.input = "";
    this.losungswort = "";
    this.output = "";
  }

  async decodeMessage(){
    this.showError = false;

    try{
      const response = await axios.post('http://localhost:3000/crypto/decode',{
        losungswort: this.losungswort,
        encodedInput: this.input
      })
      this.output = response.data
    } catch (exception){
      this.showError = true;
    }
  }
}
