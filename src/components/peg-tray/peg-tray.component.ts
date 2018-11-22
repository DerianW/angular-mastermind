import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-peg-tray',
  templateUrl: './peg-tray.component.html',
  styleUrls: ['./peg-tray.component.css']
})



export class PegTrayComponent implements OnInit
{

  constructor(private ds: DataService){}

  ngOnInit(){}

  selectColor(col, i)
  {

    this.ds.selectedColor = col;
    
    for(let j=0; j<6; j++)
    {
      document.getElementById(`outer-peg-${j}`).style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }

    document.getElementById(`outer-peg-${i}`).style.backgroundColor = 'rgba(255, 255, 255, 1)';

  }

}
