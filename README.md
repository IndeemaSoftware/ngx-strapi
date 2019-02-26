# NgxStrapi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## This module is created for help interact with Strapi https://strapi.io/

In module there exists 5 methods for interact with Strapi API

1. `view` is created for get information about content

2. `list` is created for get all the content

3. `create` is created for create the content

4. `update` is created for update the content

5. `delete` is created for delete the content

6. `jwt` is for generate the Json Web Token

You can use this functionality for interact with Strapi API.
Just call the `viev` function like this.exapmleService.view(url).subscribe(res => console.log(res));
Wiht this functionality you can work with all basic Strapi contents created by default and don't write services for each content separately for Strapi.

There is also functionality for authorization with Strapi

1. `signin` is for signin process

2. `signup` is for signup process

3. `forgotPassword` is for generate forgot password link

4. `resetPassword` is for reset password

5. `logout` is for logout functionality

6. `jwt` is for generate the Json Web Token

All the code is lies in scr/app directory where REST functionaliti is in default-rest.service.ts file

Authorization functionality is in ngx-strapi-lib.service.ts file