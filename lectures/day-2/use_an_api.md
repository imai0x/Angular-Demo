# Using an API with AJAX

<!--WDI4 9:57 -->

## Lesson Objectives

1. Create a new app
1. Generate a new component
1. Clean up app.component.html
1. Add search component to app
1. Add Form HTML to search component
1. Import Form functionality into the app
1. Set a component property to the value of an input
1. Invoke a function when the user clicks a button
1. Add the ability to make AJAX requests
1. Make an AJAX request
1. Display AJAX results in app
1. Display more data in the HTML

## Create a new app

```
ng new starwars
cd starwars
ng serve --open
```

## Clean up app.component.html

Set `src/app/app.component.html` contents to:

```html
<h1>Star Wars Character Search App</h1>
```

## Generate a new component

```
ng generate component search
```

## Add search component to app

Edit `src/app/app.component.html`:

```html
<h1>Star Wars Character Search App</h1>
<app-search></app-search>
```

<!--10:07 WDI4 -->

## Add Form HTML to search component

Edit `src/app/search/search.component.html`:

```html
<section>
    <h2>Search For A Star Wars Character</h2>
    <input type="text" placeholder="Character Name"/>
    <input type="submit" value="Search"/>
</section>
```

## Import Form functionality into the app

Edit `src/app/app.module.ts` to import `FormsModule` and place it as an import:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms'; //import FormsModule

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule //add it as an import
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

<!--10:12 WDI4 -->

## Set a component property to the value of an input

In `src/app/search/search.component.html`, add `[(ngModel)]` to the text input:

```html
<section>
    <h2>Search For A Star Wars Character</h2>
    Search String: {{name}}
    <input [(ngModel)]="name" type="text" placeholder="Character Name"/>
    <input type="submit" value="Search"/>
</section>
```

Test this by changing the text in the input field.

## Invoke a function when the user clicks a button

In `src/app/search/search.component.ts` add a `findCharacter` method to SearchComponent:

```javascript
findCharacter(name){
    console.log('finding ' + name);
}
```

Call it in `src/app/search/search.component.html` (also remove the `Search String:{{name}}` test code):

```html
<section>
    <h2>Search For A Star Wars Character</h2>
    <input [(ngModel)]="name" type="text" placeholder="Character Name"/>
    <input (click)="findCharacter(name)" type="submit" value="Search"/>
</section>
```

Test this by looking in the console.

<!--WDI4 10:24 -->

## Add the ability to make AJAX requests

Add `HttpModule` to `src/app/app.module.ts`:

```javascript
import { HttpModule } from '@angular/http'; //import module

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HttpModule, //add HttpModule here
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
```

Now edit `src/app/search/search.component.ts` to import appropriate modules:

```javascript
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
```

And tell the constructor of the `SearchComponent` class to add an `http` property:

```javascript
constructor(
    private http: Http
) { }
```

## Make an AJAX request

In `src/app/search/search.component.ts`, `findCharacter(name)` should make a request to `swapi.io`:

```javascript
findCharacter(name){
    this.http.get('http://swapi.co/api/people/?search=' + name)
    .toPromise()
    .then(response => console.log(response.json()));
}
```

The `rxjs/add/operator/toPromise` import that we previously wrote adds the ability to change the `Observable` (more on this in another lecture) into a `Promise`.

You can test this by looking in the console.

<!--10:35 WDI4 -->

## Display AJAX results in app

In `src/app/search/search.component.ts` add a public `results` property and set it to the results of the AJAX call when it succeeds:

```javascript
export class SearchComponent implements OnInit {

    results; //add the public property here

    constructor(
        private http: Http
    ) { }

    findCharacter(name){
        this.http.get('http://swapi.co/api/people/?search=' + name)
        .toPromise()
        .then(response => this.results = response.json().results); //set it here
    }

    ngOnInit() {
    }

}
```

Now add some HTML to `src/app/search/search.component.html` to display the results:

```html
<section *ngIf="results">
    <h2>Search Results</h2>
    <ul>
        <li *ngFor="let character of results">{{character.name}}</li>
    </ul>
</section>
```

You can test this in the app.

## Display more data in the HTML

Edit `src/app/search/search.component.html`:

```html
<section *ngIf="results">
    <h2>Search Results</h2>
    <ul>
        <li *ngFor="let character of results">
            <h3>{{character.name}}</h3>
            <dl>
                <dt>Birth Year</dt>
                <dd>{{character.birth_year}}</dd>
                <dt>Eye Color</dt>
                <dd>{{character.eye_color}}</dd>
                <dt>Hair Color</dt>
                <dd>{{character.hair_color}}</dd>
                <dt>Gender</dt>
                <dd>{{character.gender}}</dd>
                <dt>Height</dt>
                <dd>{{character.height}}</dd>
                <dt>Mass</dt>
                <dd>{{character.mass}}</dd>
                <dt>Skin Color</dt>
                <dd>{{character.skin_color}}</dd>
            </dl>
        </li>
    </ul>
</section>
```

<!--10:45 WDI4 -->
