import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greeting = '';

  constructor(private appService: AppService){}


  ngOnInit(): void {
    this.appService.sayHello()
      .subscribe(result => this.greeting = result);
  }
}
