import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrong-answer',
  templateUrl: './wrong-answer.component.html',
  styleUrls: ['./wrong-answer.component.css']
})
export class WrongAnswerComponent {
  wrongAns
  
  constructor(private _Activatedroute:ActivatedRoute){
    this.wrongAns=this._Activatedroute.snapshot.paramMap.get("wrongAns");
  }
  
  wrongAnswers={
    3:"Really? I hate Dhoni",
    2:"They have ambani lol"
  }
}
