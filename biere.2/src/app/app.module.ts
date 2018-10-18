import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddRecetteComponent} from './add-recette/add-recette.component';
import { BiereComponent } from './biere/biere.component';

const routes : Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'addUser',
    component: AddRecetteComponent,
  },
  {
    path: 'biere',
    component: BiereComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AddRecetteComponent,
    BiereComponent
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
