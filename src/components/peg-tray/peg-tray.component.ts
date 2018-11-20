import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-peg-tray',
  templateUrl: './peg-tray.component.html',
  styleUrls: ['./peg-tray.component.css']
})



export class PegTrayComponent implements OnInit
{

  pegTray = this;

  colors = ["red", "blue", "green", "yellow", "black", "brown"];
  selectedColor = '';

  constructor(){}

  ngOnInit(){}

  selectColor(col, i)
  {

    console.log("boop");

    this.selectedColor = col;

    for(let j=0; j<6; j++)
    {
      document.getElementById(`outer-peg-${j}`).style.backgroundColor = 'rgba(255, 255, 255, 1)';
    }

    let id = `outer-peg-${i}`;
    document.getElementById(id).style.backgroundColor = 'rgb(255, 255, 255)';
  }

}
