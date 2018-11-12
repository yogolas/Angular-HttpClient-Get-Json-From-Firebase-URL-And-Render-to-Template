import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

listmenu = {menu1:'menu1',menu2:'menu2',menu3:'menu3'};


}
