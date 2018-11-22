import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from '../components/board/board.component';
import { AnswerComponent } from '../components/answer/answer.component';
import { GuessesComponent } from '../components/guesses/guesses.component';
import { PegTrayComponent } from '../components/peg-tray/peg-tray.component';
import { GuessComponent } from '../components/guess/guess.component';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    AnswerComponent,
    GuessesComponent,
    PegTrayComponent,
    GuessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
