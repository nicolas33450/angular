import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
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
    component: AddUserComponent,
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
    AddUserComponent,
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
