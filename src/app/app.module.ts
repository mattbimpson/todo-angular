import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { MainComponent } from './main/main.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ todos: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
