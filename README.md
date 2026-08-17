# RideFlow — Employee Commute Dashboard

A small Angular 18 commute project demonstrating standalone components, routing, services and dependency injection, Signals, RxJS search, HttpClient REST-style integration, and responsive UI.

## Tech stack

Angular 18 · TypeScript · Signals · RxJS · HttpClient · HTML/CSS

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`. The app uses an `HttpClient` interceptor to provide a small in-browser mock REST API, keeping component API logic inside services while requiring no backend.

## Key concepts

- Standalone components and Angular Router (`routerLink`, `router-outlet`)
- Typed `Ride` and `User` interfaces
- Services, dependency injection, `HttpClient`, and RxJS Observables
- `signal()` and `computed()` for the rides filter state
- `debounceTime` and `distinctUntilChanged` for reactive search
- Loading, error, and empty UI states with responsive layouts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
