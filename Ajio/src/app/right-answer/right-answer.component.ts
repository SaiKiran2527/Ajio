import { Component } from '@angular/core';
import { ControlServiceService } from '../control-service.service';
import { Questions } from 'src/assets/questions';
import { ITEMS } from 'src/assets/mock-data';

@Component({
  selector: 'app-right-answer',
  templateUrl: './right-answer.component.html',
  styleUrls: ['./right-answer.component.css']
})
export class RightAnswerComponent {
  msg:string=""
  visi:boolean=true
  j=this.cont.i
  count=this.cont.questions.length
  constructor(private cont: ControlServiceService) { 
  }
  questions: Questions[] = ITEMS
  ngOnInit(): void {
    if(this.cont.correct){
      this.msg=this.cont.questions[this.j].correct
      this.cont.score=this.cont.score+1
    }else{
      this.msg=this.cont.questions[this.j].wrong
    }
  }
  

  nextQuestion(){
    this.cont.correct=false
    this.cont.changeQuestion()
  }
  EndQuiz(){
    this.cont.reset()
  }
  visiChange(){
    if(this.visi==true){
      this.visi=false
    }else{
      this.visi=true
    }
  }
  

}
