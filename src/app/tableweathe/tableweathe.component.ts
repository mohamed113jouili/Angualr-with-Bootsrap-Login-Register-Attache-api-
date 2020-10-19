import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Models/user';

@Component({
  selector: 'app-tableweathe',
  templateUrl: './tableweathe.component.html',
  styleUrls: ['./tableweathe.component.css']
})
export class TableweatheComponent implements OnInit {
  @Input() x: User[];
  constructor() { }

  ngOnInit(): void {
  }

}
