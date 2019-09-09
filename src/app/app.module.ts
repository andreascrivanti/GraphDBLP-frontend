import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputFormComponent } from './input-form/input-form.component';
import { ResultsViewComponent } from './results-view/results-view.component';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faArrowsAltH, faUser, faUsers, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);
library.add(faArrowsAltH);
library.add(faUser);
library.add(faUsers);
library.add(faSyncAlt);

import { HttpClientModule } from '@angular/common/http';
import { ResultViewComponent } from './result-view/result-view.component';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ResultsViewComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
