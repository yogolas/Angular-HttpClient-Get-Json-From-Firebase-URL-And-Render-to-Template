import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})


export class PanelComponent implements OnInit {

  datapanel: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://yogolas-angulario-get-hero.firebaseio.com/.json').subscribe(data => {
      console.log(data);
      this.datapanel = data;
    });
  }


}
