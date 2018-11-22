import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})



export class GuessComponent implements OnInit
{

  @Input() guess;
  coloredPegCounter = 0;

  pegs = [0, 1, 2, 3];

  constructor(private ds: DataService){}

  ngOnInit(){}

  colorMe(guess, peg)
  {


    if (guess === this.ds.activeGuess)
    {
      let currentColor = document.getElementById(`peg-${guess}-${peg}`).style.backgroundColor;


      if (this.ds.selectedColor != '' && currentColor === '')
      {
        document.getElementById(`peg-${guess}-${peg}`).style.backgroundColor = this.ds.selectedColor;
        this.coloredPegCounter++;
        this.ds.guessArray[peg] = this.ds.colors.indexOf(this.ds.selectedColor);
        if (this.coloredPegCounter === 4) this.ds.showBtn = true;
      }

      else if (this.ds.selectedColor != ''
              && currentColor != ''
              && currentColor != this.ds.selectedColor)
      {
        document.getElementById(`peg-${guess}-${peg}`).style.backgroundColor = this.ds.selectedColor;
      }

      else
      {
        document.getElementById(`peg-${guess}-${peg}`).style.backgroundColor = '';
        this.coloredPegCounter--;
        this.ds.showBtn = false;
      }
    }


  }



}
