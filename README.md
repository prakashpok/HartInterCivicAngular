# HartIntercivicAngular

# git 

Hello Jason, 

I started with very simple approch and for now hardcoded data and base URL. 

# I created two project namely, 
1. HartIntercivicAngular
  This angular project has a service layer that listens to our backend.
  I also embeded simple Angular Timer for now. 
  
2. HartIntercivicBackEndWebAPI
  #I created a ApiController to get TimerList, that can be comsume by our frontend.
  #since I see your requirement has xml data so you have to specify  xml or json on your Base url.
  https://localhost:7257/api/TimerList/get.xml
  https://localhost:7257/api/TimerList/get.json
  You can try it on https://localhost:7257/swagger/index.html, please specify xml or json on format
  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
