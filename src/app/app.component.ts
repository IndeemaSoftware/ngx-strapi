import { Component, OnInit } from '@angular/core';
import { NgxStrapiLibService } from '../../dist/ngx-strapi-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private service: NgxStrapiLibService) {}

  ngOnInit() {
    console.log(this.service);
  }
}
