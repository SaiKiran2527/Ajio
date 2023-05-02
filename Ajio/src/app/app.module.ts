import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { RightAnswerComponent } from './right-answer/right-answer.component';
import { WrongAnswerComponent } from './wrong-answer/wrong-answer.component';
import { FormsModule } from '@angular/forms';
import { SurpriseComponent } from './surprise/surprise.component';
import { TadaComponent } from './tada/tada.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    HomeComponent,
    RightAnswerComponent,
    WrongAnswerComponent,
    SurpriseComponent,
    TadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
