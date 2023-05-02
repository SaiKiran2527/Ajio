import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  gotoQuestions() {
    this.router.navigateByUrl('/questions');
  }
}
