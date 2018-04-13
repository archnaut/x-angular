import { Component, OnInit } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  link: string = 'https://www.google.com';

  constructor() { }

  ngOnInit() {
  }

}
