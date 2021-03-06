import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-guesses',
  templateUrl: './guesses.component.html',
  styleUrls: ['./guesses.component.css']
})



export class GuessesComponent implements OnInit
{

  guesses = [8, 7, 6, 5, 4, 3, 2, 1, 0];

  constructor(private ds: DataService){}

  ngOnInit(){}

}
