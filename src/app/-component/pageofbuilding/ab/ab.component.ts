import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css']
})
export class AbComponent implements OnInit {

  title: String;

  constructor() {
    var title = 'Activity Center';

   }

  ngOnInit() {
  }

}
