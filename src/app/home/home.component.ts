import { Component, OnInit } from '@angular/core';
import { WeatheService } from '../Services/weathe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public Wservice:WeatheService) { }

  ngOnInit(): void {
  }
  getPayes(emit){

    console.log("get input payes"+ emit)
  
  this.Wservice.fetchData(emit)
 
  }
}
