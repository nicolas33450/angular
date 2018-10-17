import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes : Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
