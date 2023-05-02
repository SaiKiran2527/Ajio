import { Component } from '@angular/core';
import { ControlServiceService } from '../control-service.service';
import { Questions } from 'src/assets/questions';
import { ITEMS } from 'src/assets/mock-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  answer=''
  

  option:string=""
  selectedOption: any;
  constructor(private cont: ControlServiceService, private router: Router) {
    
   }
   
  questions: Questions[] = ITEMS
   j=this.cont.i
   
  ngOnInit(): void {
  }

  clickNextButton(){
    // if(this.questions[this.j][0]){}
    console.log("in "+this.cont.questions.length + " "+ this.j)
    if(this.selectedOption==null){
      alert("please select an option before submitting!")
    }
    if(this.selectedOption==this.questions[this.j].answer){
      console.log("yo supp man")
      this.cont.correct=true
      this.router.navigateByUrl('/answer')
    }else{
      this.router.navigate(['/wrongAnswer',this.selectedOption])
    }
  }
  optionChange(event : any){
    this.selectedOption=event.target.value;
    console.log(this.selectedOption)
  }

  EndQuiz(){
    alert("Note : Your current Quiz is ended, you'll have to start from the beginning")
    this.cont.reset()
  }

}
