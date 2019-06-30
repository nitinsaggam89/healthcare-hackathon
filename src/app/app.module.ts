import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
 
import {MatGridListModule} from '@angular/material/grid-list';
import {CustomMaterialModule} from './material/material.module';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatSidenavModule, MatTabsModule, MatListModule, MatPaginatorModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileGridComponent } from './tile-grid/tile-grid.component';
import { FusionChartsModule } from 'angular-fusioncharts';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// Load Powerchart module
import * as Powercharts from 'fusioncharts/fusioncharts.powercharts';
import { TileGridOneComponent } from './tile-grid/tile-grid-one/tile-grid-one.component';
import { TileGridThreeComponent } from './tile-grid/tile-grid-three/tile-grid-three.component';
import { TileGridFourComponent } from './tile-grid/tile-grid-four/tile-grid-four.component';
import { TileGridTwoComponent } from './tile-grid/tile-grid-two/tile-grid-two.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidNavListComponent } from './navigation/sid-nav-list/sid-nav-list.component';
import { ProfileComponent } from './profile/profile.component';
import { PatientAppointmentComponent } from './tile-grid/patient-appointment/patient-appointment.component';
import { IAppState, rootReducer, INITIAL_STATE } from './redux/store';
import { TestComponent } from './test/test.component';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, Powercharts, FusionTheme)

@NgModule({
  declarations: [
    AppComponent,
    TileGridComponent,
    TileGridOneComponent,
    TileGridThreeComponent,
    TileGridFourComponent,
    TileGridTwoComponent,
    LoginComponent,
    PageNotFoundComponent,
    SideNavComponent,
    SidNavListComponent,
    HeaderComponent,
    ProfileComponent,
    PatientAppointmentComponent,
    TestComponent
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule,
    AppRoutingModule,
    MatGridListModule,
    FusionChartsModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatPaginatorModule
    //CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
