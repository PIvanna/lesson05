import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  valueInput = '';
  correct: boolean = true;
  placeholderText: string = 'Enter word';
  placeholderTextArea: string = 'Enter word';
  listBadWords: string = '';
  disabled: boolean = true;
  valueTextArea: string = '';
  correctTextArea: boolean = true;
  correctText: boolean = false;



  add(event: Event) {
    if (this.valueInput !== '') {
      this.correct = true;
      this.placeholderText = 'Enter word';
      if (this.listBadWords != '') {
        this.listBadWords += ',' + this.valueInput;
      }
      else {
        this.listBadWords += this.valueInput;
      }
      this.valueInput = '';
      this.disabled = false;
    }
    else {

      this.placeholderText = 'Please write word';
      this.correct = false;
    }
  }

  reset(event: Event) {
    if (!this.disabled) {
      this.listBadWords = '';
      this.valueTextArea = '';
      this.disabled = true;
      this.correctTextArea = true;
      this.correct = true;
    }
  }

  cenzor(event: Event) {
    if (this.valueTextArea != "" && this.listBadWords !== '') {
      this.disabled = false;
      this.correctText = false;
      this.placeholderTextArea = "Text here...";
      let str: string = this.valueTextArea;
      let stringBadWords = this.listBadWords;
      let arrWords = (stringBadWords) ? stringBadWords.split(',') : [];
      for (let i = 0; i < arrWords.length; i++) {
        const wordToReplace = arrWords[i];
        const regex = new RegExp('\\b' + wordToReplace + '\\b', 'gi');
        const replacement = '*'.repeat(wordToReplace.length);
        str = str.replace(regex, replacement);
      }
      this.valueTextArea = str;

    }
    else if (this.valueTextArea == '') {
      this.correctTextArea = false;
      this.placeholderTextArea = "Enter some text";
    }
  }
}
