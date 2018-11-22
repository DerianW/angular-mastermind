import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit
{

  answerArray = [];

  constructor(private ds: DataService){}

  ngOnInit()
  {
    for(let i=0; i<4; i++)
    { this.answerArray.push(Math.floor(Math.random() * 6)); }    
  }

  gradeGuess = () => {
    this.ds.showBtn = false;
    this.compareArrays();
    this.ds.activeGuess++;
    this.ds.guessArray = [-1, -1, -1, -1];
  }

  compareArrays = () => {


    let gradeArray = [];
    let tempGuessArray = this.copyArray(this.ds.guessArray);
    let tempAnswerArray = this.copyArray(this.answerArray);

    this.answerArray.forEach((peg, i) => {

      if (peg === tempGuessArray[i])
      {
        gradeArray.push('black');
        tempGuessArray[i] = -2;
        tempAnswerArray[i] = -1;
      }

    });

    tempAnswerArray.forEach((answerPeg, i) => {
      tempGuessArray.forEach((guessPeg, j) => {
        if (answerPeg === guessPeg)
        {
          gradeArray.push('white');
          tempAnswerArray[i] = -1;
          tempGuessArray[i] = -2;
        }
      });
    });


    gradeArray.forEach((col, i) => {
      document.getElementById(`gradePeg-${this.ds.activeGuess}-${i}`).style.backgroundColor = col;
    });


  }



  copyArray(oldArray)
  {
    let newArray = [];
    oldArray.forEach(element => {
      newArray.push(element);
    });
    return newArray;
  }



}
