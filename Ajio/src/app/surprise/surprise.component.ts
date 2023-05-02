import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surprise',
  templateUrl: './surprise.component.html',
  styleUrls: ['./surprise.component.css']
})
export class SurpriseComponent {
  constructor(private router: Router) {
    
  }
  verify(password:string){
    if(password=="ALWAYSNFOREVER"){
      this.router.navigateByUrl('/tada')
    }else{
      alert("Oopsie Incorrect Password!!! Take the quiz to figure out the Password")
    }
  }
}
