import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { RightAnswerComponent } from './right-answer/right-answer.component';
import { WrongAnswerComponent } from './wrong-answer/wrong-answer.component';
import { SurpriseComponent } from './surprise/surprise.component';
import { TadaComponent } from './tada/tada.component';

const routes: Routes = [{path : '', component : HomeComponent},
{path : 'questions', component : QuestionsComponent},
{path:'answer', component: RightAnswerComponent},
{path:'wrongAnswer', component: WrongAnswerComponent},
{path:'wrongAnswer/:wrongAns', component: WrongAnswerComponent},
{path:'end', component:HomeComponent},
{path:'surprise', component: SurpriseComponent},
{path:'tada', component: TadaComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
