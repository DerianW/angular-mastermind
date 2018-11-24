import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})



export class DataService
{

  selectedColor = '';
  activeGuess = 0;  
  showBtn = false;
  colors = ["red", "purple", "green", "yellow", "black", "brown"];
  guessArray = [-1, -1, -1, -1];
  youWin = false;

  constructor(){}

}
