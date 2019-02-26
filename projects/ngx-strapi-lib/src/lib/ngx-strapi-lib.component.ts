import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enl-ngx-strapi-lib',
  template: `
    <p>
      ngx-strapi-lib works!
    </p>
  `,
  styles: []
})
export class NgxStrapiLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signin(data) {
    return data;
  }

}
