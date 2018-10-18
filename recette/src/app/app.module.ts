import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddRecetteComponent } from './add-recette/add-recette.component';
import { GalerieComponent } from './galerie/galerie.component';

const routes : Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'galerie',
    component: GalerieComponent,
  },
  {
    path: 'addRecette',
    component: AddRecetteComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddRecetteComponent,
    GalerieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
