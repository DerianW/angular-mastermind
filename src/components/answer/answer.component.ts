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
    this.ds.activeGuess++;
    this.compareArrays();
    this.ds.guessArray = [-1, -1, -1, -1];
  }

  compareArrays = () => {
    
  }

}
