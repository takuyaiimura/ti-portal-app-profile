import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerpart',
  templateUrl: './footerpart.component.html',
  styleUrls: ['./footerpart.component.css']
})
export class FooterpartComponent implements OnInit {
  strDate : Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
