import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PostService} from './services/post.service';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { HelloComponent } from './hello/hello.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { GalerieComponent } from './galerie/galerie.component';

const routes : Routes = [
  {
    path: 'post',
    component: PostListComponent,
  },
  {
    path: 'hello',
    component: HelloComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'galerie',
    component: GalerieComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HelloComponent,
    ContactComponent,
    HomeComponent,
    GalerieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
