import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';

import { AboutComponent }  from './components/about/about.component';
import { SearchComponent }  from './components/search/search.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { ArtistComponent }  from './components/artist/artist.component';
import { AlbumComponent }  from './components/album/album.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, AboutComponent, SearchComponent, NavbarComponent, ArtistComponent, AlbumComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
