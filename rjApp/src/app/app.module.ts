import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WealthContributionCalculatorComponent } from './modules/wealth-contribution-calculator/wealth-contribution-calculator.component';
import { MatRadioModule } from '@angular/material';
import { AppConstants } from './app.constants';
import { FormsModule } from '@angular/forms';
import { VoteDistributionComponent } from './modules/vote-distribution/vote-distribution.component';
import { NationalProgramBalanceComponent } from './modules/national-program-balance/national-program-balance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VoteDistributionConstants } from './modules/vote-distribution/vote-distribution.constants';

@NgModule({
  declarations: [
    AppComponent,
    WealthContributionCalculatorComponent,
    VoteDistributionComponent,
    NationalProgramBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatRadioModule
  ],
  providers: [
    AppConstants,
    VoteDistributionConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
