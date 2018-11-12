import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `

  <div *ngFor="let x of datapanel" class="col-md-6">

  <div class="panel panel-default">
    <div class="panel-body">

<h1>{{x.name}}</h1>

    </div>
  </div>

</div>



    `
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  datapanel = [
    {name: 'A'},
    {name: 'A'},
    {name: 'A'},
    {name: 'A'},
    {name: 'A'},
    {name: 'A'},
    {name: 'A'},
    {name: 'A'},
    {name: 'A'},
    {name: 'A'},
    {name: 'A'},
    {name: 'A'}
  ];

}
