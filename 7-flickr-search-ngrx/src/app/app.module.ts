import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { FullPhotoComponent } from './full-photo/full-photo.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchEffects } from './effects/search.effects';
import { reducers } from './reducers';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    PhotoListComponent,
    PhotoItemComponent,
    FullPhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,

    EffectsModule.forRoot([SearchEffects]),

    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),

    StoreDevtoolsModule.instrument({
      logOnly: false, // TODO Use environment.production
      maxAge: 50,
    }),
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
