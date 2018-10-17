import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

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
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
